const textElement = document.getElementById("game-text");
const choicesElement = document.getElementById("choices");

const gameData = {
  start: {
    text: "You wake up in a room you don’t recognise. The air feels wrong.",
    choices: [
      { text: "Stand up", next: "stand" },
      { text: "Stay still", next: "still" }
    ]
  },

  stand: {
    text: "Your legs shake, but you’re upright. The floor hums beneath you.",
    choices: [
      { text: "Look around", next: "look" },
      { text: "Call out", next: "call" }
    ]
  },

  still: {
    text: "You stay still. Whatever is watching you does not leave.",
    choices: [
      { text: "Move anyway", next: "stand" },
      { text: "Close your eyes", next: "end" }
    ]
  },

  look: {
    text: "There are no doors. Just walls that feel too close.",
    choices: [
      { text: "Touch the wall", next: "end" },
      { text: "Sit down", next: "still" }
    ]
  },

  call: {
    text: "Your voice echoes back to you — distorted.",
    choices: [
      { text: "Shout again", next: "end" },
      { text: "Stay quiet", next: "still" }
    ]
  },

  end: {
    text: "Something changes. You are no longer alone.",
    choices: []
  }
};

function showNode(nodeKey) {
  const node = gameData[nodeKey];

  // Clear old content
  textElement.style.opacity = 0;
  textElement.style.transform = "translateY(20px)";
  choicesElement.innerHTML = "";

  setTimeout(() => {
    // Set new text
    textElement.textContent = node.text;

    textElement.style.transition = "all 0.6s ease";
    textElement.style.opacity = 1;
    textElement.style.transform = "translateY(0)";

    // Create choices
    node.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.classList.add("choice-btn");

      button.addEventListener("click", () => {
        showNode(choice.next);
      });

      choicesElement.appendChild(button);

      // Stagger animation
      setTimeout(() => {
        button.style.opacity = 1;
        button.style.transform = "translateY(0)";
      }, 200 * index);
    });
  }, 300);
}

// Start the game
showNode("start");

.letter {
  display: inline-block;
  animation: jitter 0.15s infinite;
}

@keyframes jitter {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(1px, -1px); }
  50%  { transform: translate(-1px, 1px); }
  75%  { transform: translate(1px, 1px); }
  100% { transform: translate(0, 0); }
}
