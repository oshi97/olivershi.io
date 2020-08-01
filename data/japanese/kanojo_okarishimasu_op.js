const contentData = [
  [
    {
    }
  ]
]

const englishContent = 
`I can't say that it's fate
How many more centimeters should I get close to you
While I can't (While I can't) say it, you are the one I like, so I gaze at you from behind

Everyday is busy
I have no confidence going on a date with you
The more you shine
The more and more miserable I become
The time when we can't meet plus the moment when you smile
Divide this wonderful moment into half
Such a clumsy me and you that pretends to be tough
Is unexpectedly a good match I thought!
When you realize it, it's too late

Again, I can't say that it's a fate
How many more centimeters should I get close to you
What can I (What can I) do for you, What should I do to help you
That day, when your smile looked like "I'm okay"
How many centimeters are you walking forward
Because If (Because If) I say that you are the one, then maybe I can catch up to you
Will I be able to reach out to you?`

export default {
  titleData: [],
  contentData: contentData,
  japaneseTitle: [],
  japaneseContent: contentData.map(line => line.map(word => word.word)),
  englishTitle: '『Centimeter』',
  englishContent: englishContent.split('\n').filter(line => line),
}