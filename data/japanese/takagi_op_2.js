const titleData = []
const contentData = [
  []
]

const englishContent =
`The gap between us is 0cm
Our shoulders lined up with no space to hide anything

Did you know?
If you want a wish to come true, if you say it out loud
You can get closer to making that wish to come true
The smaller the eraser that
Makes wishes come true becomes
My memories with you increase
The profile of your face becomes more mature

The gap between us is 0cm
Please guess what my wish is correctly
The first time is always
Something you remember the most
That's why I want you

Did you know?
It's actually quite easy to figure me out
Look into my eyes, don't look away
Let's figure out what we each think
Before the bell starts to ring

The gap between us is 0cm
Our shoulders line up with no space to hide anything
The first time is always
Something you don't want to forget
That's why I want you

The back alley around dusk
The shadow of the two of us
Easily overlaps with each other
I want the truth, nothing on purpose, and not just by chance

I have so much love towards you
If you can take your time to realize it, that would be great
The tip of the hand I reach out
Is what I wish for the most
So, I'm going to wait for you
With my hand open`.split('\n').filter(line => line)

export default {
  titleData: titleData,
  contentData: contentData,
  japaneseTitle: titleData.map(word => word.word),
  japaneseContent: contentData.map(line => line.map(word => word.word)),
  englishTitle: 'Zero Centimeters',
  englishContent: englishContent,
}