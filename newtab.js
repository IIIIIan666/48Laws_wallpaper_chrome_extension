const laws = [
  'Law 1: Never outshine the master.', 
  'Law 2: Never put too much trust in friends, learn how to use enemies.', 
  'Law 3: Conceal your intentions.', 
  'Law 4: Always say less than necessary.', 
  'Law 5: So much depends on reputation - guard it with your life.', 
  'Law 6: Court attention at all cost.', 
  'Law 7: Get others to do the work for you, but always take the credit.', 
  'Law 8: Make other people come to you - use bait if necessary.', 
  'Law 9: Win through your actions, never through argument.', 
  'Law 10: Infection: avoid the unhappy and unlucky.', 
  'Law 11: Learn to keep people dependent on you.', 
  'Law 12: Use selective honesty and generosity to disarm your victim.', 
  "Law 13: When asking for help, appeal to people's self-interest, never to their mercy or gratitude.", 
  'Law 14: Pose as a friend, work as a spy.', 
  'Law 15: Crush your enemy totally.', 
  'Law 16: Use absence to increase respect and honour.', 
  'Law 17: Keep others in suspended terror: cultivate an air of unpredictability.', 
  'Law 18: Do not build fortresses to protect yourself - isolation is dangerous.', 
  "Law 19: Know who you're dealing with - do not offend the wrong person.", 
  'Law 20: Do not commit to anyone.', 
  'Law 21: Play a sucker to catch a sucker - seem dumber than your mark.', 
  'Law 22: Use the surrender tactic: transform weakness into power.', 
  'Law 23: Concentrate your forces.', 
  'Law 24: Play the perfect courtier.', 
  'Law 25: Re-create yourself.', 
  'Law 26: Keep your hands clean.', 
  "Law 27: Play on people's need to believe to create a cult like following.", 
  'Law 28: Enter action with boldness.', 
  'Law 29: Plan all the way to the end.', 
  'Law 30: Make your accomplishments seem effortless.', 
  'Law 31: Control the options: get others to play with the cards you deal.', 
  "Law 32: Play to people's fantasies.", 
  "Law 33: Discover each man's thumbscrew.", 
  'Law 34: Be royal in your own fashion: act like a king to be treated like one.', 
  'Law 35: Master the art of timing.', 
  'Law 36: Disdain things you cannot have: ignoring them is the best revenge.', 
  'Law 37: Create compelling spectacles.', 
  'Law 38: Think as you like but behave like others.', 
  'Law 39: Stir up waters to catch fish.', 
  'Law 40: Despise the free lunch.', 
  "Law 41: Avoid stepping into a great man's shoes.", 
  'Law 42: Strike the shepherd and the sheep will scatter.', 
  'Law 43: Work on the hearts and minds of others.', 
  'Law 44: Disarm and infuriate with the mirror effect.', 
  'Law 45: Preach the need for change, but never reform too much at once.', 
  'Law 46: Never appear too perfect.', 
  'Law 47: Do not go past the mark you aimed for; in victory, learn when to stop.', 
  'Law 48: Assume formlessness.'];

function getRandomLaw() {
  return laws[Math.floor(Math.random() * laws.length)];
}

function getRandomImage() {
  const total = 23;
  const index = Math.floor(Math.random() * total) + 1;
  return `images/bg${index}.jpg`;
}

document.getElementById("law-text").innerText = getRandomLaw();

const bgUrl = getRandomImage();
const img = new Image();
img.src = bgUrl;

img.onload = function () {
  const aspectRatio = img.width / img.height;

  document.body.style.backgroundImage = `url(${bgUrl})`;

  if (aspectRatio > 1.7) {
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundSize = "cover";
  }

  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
};