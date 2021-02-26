import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaintingWisdomsService {

  getWisdom() {  
      return ALLWisdoms[Math.floor(Math.random() * ALLWisdoms.length)];
  }
 
}
const ALLWisdoms = [    
  { "id": 1, "qoute": "Painting is just another way of keeping a diary.", "author": "Pablo Picasso"  },
  { "id": 2, "qoute": "Painting is self-discovery. Every good artist paints what he is. ", "author": "Jackson Pollock"  },
  { "id": 3, "qoute": "Painting is concerned with all the 10 attributes of sight; which are: Darkness, Light, Solidity and Colour, Form and Position, Distance and Propinquity, Motion and Rest.  ", "author": "Leonardo da Vinci"  },
  { "id": 4, "qoute": "Painting is an illusion, a piece of magic, so what you see is not what you see.", "author": "Philip Guston"  }, 
  { "id": 5, "qoute": "Good painting is like good cooking; it can be tasted, but not explained.", "author": "Maurice de Vlaminck"  },
  { "id": 6, "qoute": "Painting is an infinitely minute part of my personality. ", "author": "Salvador Dali"  },
  { "id": 7, "qoute": "Painting is easy when you don't know how, but very difficult when you do.  ", "author": "Edgar Degas"  }, 
  { "id": 8, "qoute": "Every painting is a voyage into a sacred harbour.", "author": "Giotto di Bondone"  }, 
  { "id": 9, "qoute": "Painting is not for me either decorative amusement, or the plastic invention of felt reality; it must be every time: invention, discovery, revelation. ", "author": "Max Ernst"  }, 
  { "id": 10, "qoute": "The painting has a life of its own. I try to let it come through.", "author": "Jackson Pollock"  },  
  { "id": 11, "qoute": "Painting is a nail to which I fasten my ideas.", "author": "Georges Braque"  },
  { "id": 12, "qoute": "Painting from nature is not copying the object; it is realizing one's sensations.     ", "author": "Paul Cezanne"  },
  { "id": 13, "qoute": "A good painting to me has always been like a friend. It keeps me company, comforts and inspires.", "author": "Hedy Lamarr"  },
  { "id": 14, "qoute": "Painting is by nature a luminous language.", "author": "Robert Delaunay"  }, 
  { "id": 15, "qoute": "Painting is a blind man's profession. He paints not what he sees, but what he feels, what he tells himself about what he has seen.", "author": "Pablo Picasso"  },
  { "id": 16, "qoute": "In painting you must give the idea of the true by means of the false.", "author": "Edgar Degas"  },
  { "id": 17, "qoute": "Painting is an essentially concrete art and can only consist of the representation of real and existing things.  ", "author": "Gustave Courbet"  }, 
  { "id": 18, "qoute": "The point of painting is not really deception or imitation.   ", "author": "A. S. Byatt"  }, 
  { "id": 19, "qoute": "Painting is a faith, and it imposes the duty to disregard public opinion.", "author": "Vincent Van Gogh"  }, 
  { "id": 20, "qoute": "Painting will have to deal more fully and less obliquely with life and nature's phenomena before it can again become great.", "author": "Edward Hopper"  }, 
  { "id": 21, "qoute": "Painting is a source of endless pleasure, but also of great anguish.", "author": "Balthus"  }, 
  { "id": 22, "qoute": "For me, painting is a way to forget life. It is a cry in the night, a strangled laugh.", "author": "Georges Rouault"  }, 
  { "id": 23, "qoute": "One learns about painting by looking at and imitating other painters.", "author": "Frank Stella"  }, 
  { "id": 24, "qoute": "Painting is the aesthetic side of the object but it has never been original, has never been its own goal.", "author": "Kazimir Malevich"  },  
  { "id": 25, "qoute": "Painting becomes interesting when it becomes timeless.", "author": "Peter Doig"  },  
  { "id": 26, "qoute": "Painting calmed the chaos that shook my soul.", "author": "Niki de St. Phalle"  },  
  { "id": 27, "qoute": "Painting does what we cannot do - it brings a three-dimensional world into a two-dimensional plane.    ", "author": "Chuck Jones"  },  
  { "id": 28, "qoute": "Painting is the frozen evidence of a performance. ", "author": "Chuck Close"  },    
  { "id": 29, "qoute": "Painting contains a divine force which... makes the dead seem almost alive.", "author": "Leon Battista Alberti"  },  
  { "id": 30, "qoute": "Painting is the passage from the chaos of the emotions to the order of the possible.", "author": "Balthus"  },   
 
]       