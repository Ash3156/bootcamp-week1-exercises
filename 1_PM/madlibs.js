/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */


const noun1 = "aviation"
const verb1 = "fly"
const noun2 = "bees"
const noun3 = "wings"
const adj1 = "fat"
const noun4 = "ground"
const verb2 = "flies"
const noun5 = "humans"

const story = `
According to all known laws
of ${noun1},
 
there is no way a ${noun2}
should be able to ${verb1}.

Its ${noun3} are too small to get
its ${adj1} little body off the ${noun4}.

The ${noun2}, of course, ${verb2} anyway

because ${noun2}s don't care
what ${noun5} think is impossible.
`

console.log(story)
