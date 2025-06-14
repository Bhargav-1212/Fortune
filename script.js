const fortunes = [
  "You will soon find what you're looking for... unless it’s your missing sock. That’s gone forever.",
  "Great things are coming your way. But not today. Try again tomorrow.",
  "Beware of Mondays disguised as Tuesdays.",
  "You will get rich... emotionally, not financially. Don’t get excited.",
  "A mysterious stranger will enter your life. Probably asking for OTP.",
  "Your future is as bright as your phone screen at 3 AM.",
  "Expect the unexpected. Like that awkward wave when someone wasn’t waving at you.",
  "Your love life will soon take a dramatic turn... straight into a Netflix binge.",
  "You’ll soon win an argument. Sadly, it will be with a 12-year-old online.",
  "Luck is headed your way... but it's stuck in traffic.",
  "A great opportunity is coming. Be prepared to ignore it like the last 5.",
  "You will receive a sign. Most likely a ‘Low Battery’ warning.",
  "Your soulmate is near. But they might be using a VPN.",
  "Tomorrow holds a surprise for you. Spoiler alert: it’s more responsibilities.",
  "Someone will finally understand you. Sadly, it's a chatbot.",
  "Stars say you're special... like 'slow Wi-Fi' special.",
  "You’re one step away from greatness. Too bad you're always walking in circles.",
  "The universe wants you to know: maybe it’s not them... maybe it *is* you.",
  "Success is waiting at your doorstep. But you’re too lazy to open the door.",
  "You have potential. Shame it's still buffering.",
  "Your aura says you're bold. Your browser history says otherwise.",
  "You will go far in life. Mostly because you're always avoiding your problems.",
  "You will rise above your enemies... by blocking them.",
  "You think you’re mysterious. You’re just unreadable.",
  "Your future is unclear. Much like your handwriting.",
  "The stars have spoken. They said, 'Yikes.'",
  "A big change is coming. Like finally updating your wardrobe.",
  "You’re destined to lead... a very confusing group chat.",
  "Your confidence is inspiring. We wish it was backed by talent.",
  "You radiate power. Unfortunately, it’s 'low battery' kind of power.",
  "You’re closer to your goals than you think. Keep going.",
  "Someone you haven’t met yet is going to love you deeply.",
  "The energy you give out will come back multiplied. Spread kindness.",
  "Your patience will soon be rewarded. The wait is worth it.",
  "You’re the main character. Act like it.",
  "Believe in your magic. Even if others don’t see it yet.",
  "Every step you take, even the small ones, are building your future.",
  "Your light can never be dimmed by someone else's shadow.",
  "You’re not lost. You’re just exploring.",
  "Great things take time. And you're worth every second.",
  "You will gain wisdom today. Mostly from Google.",
  "Don't worry, everything’s falling into place. Just not the way you imagined.",
  "A quiet day ahead... because no one texted you.",
  "The stars support you... they just don’t follow you back.",
  "Your dreams will come true. Once you stop napping through life.",
  "You’re in the right place at the right time. Just with the wrong people.",
  "Today’s mood: 90% caffeine, 10% ambition.",
  "Avoid making eye contact with drama. It feeds on attention.",
  "You’re about to make a brilliant decision. Accidentally.",
  "Your next big breakthrough might happen... after one more snack break."
];

function tellFortune() {
  const nameInput = document.getElementById("nameInput");
  const fortuneText = document.getElementById("fortuneText");
  const name = nameInput.value.trim();

  if (name === "") {
    fortuneText.textContent = "Please enter your name to receive your fortune.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const message = fortunes[randomIndex];

  fortuneText.textContent = `${name}, ${message}`;
}
