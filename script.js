
const power = document.querySelector("#power");
const direct = document.querySelector("#direct");
const steps = document.querySelectorAll("li");

const holdDuration = 650;
const doubleClickWindow = 380;

let state = "off";
let previousTap = -Infinity;
let holdTimer;
let activePress = null;

// Display information for each mode
const displays = {
  off: [
    "おやすみ中",
    "電源オフ",
    "電源ボタンを１回押すと、弱モードでスタート！",
    "電源を入れる（弱）",
    2
  ],

  low: [
    "ほんのりピンク",
    "弱モード",
    "素早く２回押すと強モード。約0.65秒の長押しで電源オフ。",
    "強モードに切り替える",
    0
  ],

  high: [
    "じんわりプラム",
    "強モード",
    "約0.65秒長押しすると、青い文字の電源オフ画面に戻ります。",
    "電源オフ",
    1
  ]
};

// Update current mode
function changeState(nextState) {
  state = nextState;
  previousTap = -Infinity;

  document.body.dataset.state = state;

  const [mode, name, hint, action, step] = displays[state];

  document.querySelector("#mode").textContent = mode;
  document.querySelector("#state").textContent = name;
  document.querySelector("#hint").textContent = hint;
  document.querySelector("#direct-label").textContent = action;

  steps.forEach((item, index) => {
    item.setAttribute(
      "aria-current",
      String(index === step && state !== "off")
    );
  });
}

// Handle short presses and double presses
function tap() {
  const now = performance.now();

  if (state === "off") {
    changeState("low");
  } else if (state === "low") {
    if (now - previousTap <= doubleClickWindow) {
      changeState("high");
    } else {
      previousTap = now;
    }
  }
}

// Begin pressing the power button
function startPress(id) {
  if (activePress !== null) return;

  activePress = {
    id,
    held: false
  };

  holdTimer = setTimeout(() => {
    activePress.held = true;
    previousTap = -Infinity;

    if (state !== "off") {
      changeState("off");
    }
  }, holdDuration);
}

// Finish pressing the power button
function finishPress(id, cancelled = false) {
  if (activePress === null || activePress.id !== id) {
    return;
  }

  clearTimeout(holdTimer);

  const { held } = activePress;
  activePress = null;

  if (!held && !cancelled) {
    tap();
  }
}

// Mouse and touch interaction
power.addEventListener("pointerdown", event => {
  if (
    event.button !== 0 ||
    !event.isPrimary ||
    activePress !== null
  ) {
    return;
  }

  power.setPointerCapture(event.pointerId);
  startPress(event.pointerId);
});

power.addEventListener("pointerup", event => {
  finishPress(event.pointerId);
});

power.addEventListener("pointercancel", event => {
  finishPress(event.pointerId, true);
});

power.addEventListener("lostpointercapture", event => {
  finishPress(event.pointerId, true);
});

power.addEventListener("contextmenu", event => {
  event.preventDefault();
});

// Keyboard interaction
power.addEventListener("keydown", event => {
  if (event.key !== " " && event.key !== "Enter") {
    return;
  }

  event.preventDefault();

  if (!event.repeat) {
    startPress(event.key);
  }
});

power.addEventListener("keyup", event => {
  if (event.key !== " " && event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  finishPress(event.key);
});

power.addEventListener("blur", () => {
  finishPress(activePress?.id, true);
});

power.addEventListener("click", event => {
  if (event.detail === 0 && activePress === null) {
    tap();
  }
});

// Editor's note button
direct.addEventListener("click", () => {
  if (activePress !== null) {
    finishPress(activePress.id, true);
  }

  if (state === "off") {
    changeState("low");
  } else if (state === "low") {
    changeState("high");
  } else {
    changeState("off");
  }
});
