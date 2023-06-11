export function RandomUsername() {
    const Adjective = ['funny', 'smart', 'good', 'bad', 'playful', 'kind'];
    const Noun = ['dog', 'cat', 'monkey', 'fish', 'wolf', 'bear'];
  
    const RandomAdjective = Adjective[Math.floor(Math.random() * Adjective.length)];
    const RandomNoun = Noun[Math.floor(Math.random() * Noun.length)];
  
    const Username = RandomAdjective + " " + RandomNoun;
  
    return Username;
  }