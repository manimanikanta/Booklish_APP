import Emotions from "./assets/Images/Emotions & Relationships.jpg";
import karma from "./assets/Images/karma.jpg";
import Flowers from "./assets/Images/Flowers.jpg";
import Inner from "./assets/Images/Inner.jpg";
import Morethan from "./assets/Images/Morethanalife.jpg";
import Death from "./assets/Images/Death.jpg";
import Taste from "./assets/Images/Taste.jpg";
import source from "./assets/Images/source.jpg";
import Midnight from "./assets/Images/Midnight.jpg";
import Polish from "./assets/Images/Polish.jpg";
import Youth from "./assets/Images/Youth.jpg";
import Himalaya from "./assets/Images/Himalaya.jpg";

const AllProducts = [
  {
    id: 1,
    name: "Relationships",
    image: Emotions,
    desc: "'If you enhance yourself into a very beautiful state, everyone will want to hold a relationship with you'.\nHuman beings constantly make and break relationships.Unfortunately, relationships can make and break human beings too.Why are relationships such a circus for most of us? What is this primal urge within us that demands a bond – physical, mental, or emotional – with another ? And how do we keep this bond from turning into bondage?\n These are the fundamental questions that Relationships: Bond or Bondage looks at as Sadhguru shares with us the keys to forming lasting and joyful relationships, whether they are with husband or wife, family and friends, at work, or with the very existence itself.Sadhguru is a yogi and profound mystic of our times.An absolute clarity of perception places him in a unique space in not only matters spiritual but in business, environmental and international affairs, and opens a new door on all that he touches.",
    price: 123.0,
  },
  {
    id: 2,
    name: "Karma",
    image: karma,
    desc: "A much-used word, Karma is loosely understood as a system of checks and balances in our lives, of good actions and bad deeds, of good thoughts and bad intentions. A system which seemingly ensures that at the end of the day one gets what one deserves. This grossly over-simplified understanding has created many complexities in our lives and taken away from us the very fundamentals of the joy of living.",
    price: 169.0,
  },
  {
    id: 3,
    name: "Flowers on the Path",
    image: Flowers,
    desc: "A pragmatic mind may deem flowers unworthy of notice-devoid as they are of the nourishment and utility of fruit, leaf, bark and root. Yet these fragile and ephemeral blooms dare to flaunt the wonders of Nature. From heady fragrance to miraculous colours and intricate design, it is this spirited extravagance which draws, touches and inspires us in remarkable ways.A motley bouquet, the articles that comprise Flowers on the Path offer insights from Sadhguru that spark you with their incisive clarity, delight you with humour, or even render you in profound stillness within. Whether the subject covers social issues and worldly affairs, individual challenges, or dimensions of the beyond, Sadhguru's ability to delve to the root and look at life in all its totality is evident.",
    price: 106.0,
  },
  {
    id: 4,
    name: "Inner Engineering",
    image: Inner,
    desc: "In his revolutionary new book, visionary, mystic and yogi Sadhguru distils his own experiences with spirituality and yoga and introduces the transformational concept of Inner Engineering. Developed by him over several years, this powerful practice serves to align the mind and the body with energies around and within, creating a world of limitless power and possibilities. Inner Engineering is your own software for joy and well-being.",
    price: 199.0,
  },
  {
    id: 5,
    name: "More Than A Life",
    image: Morethan,
    desc: "This is the extraordinary story of Jaggi Vasudev or Sadhguru a young agnostic who turned yogi, a wild motor cyclist who turned mystic, a sceptic who turned spiritual guide. It seeks to recreate the life journey of a man who combines rationality with mysticism, irreverence with compassion and deep self-knowledge with a contagious love of life. Pulsating with his razor-sharp intelligence and modern-day vocabulary, the book empowers you to explore your spiritual self and could well change your life.",
    price: 225.0,
  },
  {
    id: 6,
    name: "Death",
    image: Death,
    desc: "Death is a taboo in most societies in the world. But what if we have got this completely wrong? What if death was not the catastrophe it is made out to be but an essential aspect of life, life with spiritual possibilities for transcendence?\nFor the first time, someone is saying just that.In this unique treatise- like exposition, Sadhguru dwells extensively upon his inner experience as he expounds on the more profound aspects of death that are rarely spoken about.\nFrom a practical standpoint, he elaborates on what preparations one can make for one's death, how best we can assist someone who is dying and how we can continue to support their journey even after death.Whether a believer or not, a devotee or an agnostic, an accomplished seeker or a simpleton, this is truly a book for all those who shall die!",
    price: 192.0,
  },
  {
    id: 7,
    name: "A Taste of Well-Being",
    image: Taste,
    desc: "In an era where a great variety of cuisines are just a restaurant away, it has become difficult to choose what to eat. Food products labelled 'healthy' one day are abruptly dismissed as 'lethal' the very next, while 'celebrity diets' are trashed by nutritionists. So what is the correct diet for your body? The answer lies within. In the Yogic tradition, food is alive, with a prana of its own. When consumed, the quality of the food influences the qualities of your body and mind. In A Taste of Well-Being, you will find recipes that have been perfected in the Isha Yoga Centre kitchen. Ranging from simple juices and salads to complete meals of grains, cereals and curries, the recipes are peppered with profound insights from Sadhguru on the process of eating and digestion. A book that will help you discover the potential that lies within you and the joy you can derive from the simple act of eating.",
    price: 194.0,
  },
  {
    id: 8,
    name: "Adiyogi",
    image: source,
    desc: "Shiva does not spell religion. Shiva spells responsibility -- our ability to take our very life process in our hands. -- Sadhguru 'Shi-va' is 'that which is not', a primordial emptiness; Shiva is also the first-ever yogi, Adiyogi, the one who first perceived this emptiness. Adiyogi is symbol and myth, historic figure and living presence, creator and destroyer, outlaw and ascetic, cosmic dancer and passionate lover, all at once.A book like no other, this extraordinary document is a tribute to Shiva, the Adiyogi, by a living yogi; a chronicle of the progenitor of mysticism by a contemporary mystic. Here science and philosophy merge seamlessly, so do silence and sound, question and answer--to capture the unspeakable enigma of Adiyogi in a spellbinding wave of words and ideas that will leave one entranced, transformed.",
    price: 194.0,
  },
  {
    id: 9,
    name: "Midnights With The Mystic",
    image: Midnight,
    desc: "Midnights With The Mystic: A Little Guide To Freedom And Bliss was written when Cheryl Simone decided to chronicle her late-night conversations with Sadhguru Jaggi Vasudev, which transpired at her getaway in the mountains in rural Georgia. This book inspires its readers to seek spiritual freedom and bliss.The book is also a guide to attain spiritual consciousness and it preaches the teachings of Sadhguru Vasudev Jaggi, which are all about Isha Yoga. This form of yoga is all about breathing exercises. Isha yoga has been known to cure a number of physical as well a mentally-related illnesses, such as obesity, anxiety, depression, asthma and migraines. The book does not only recount the author’s personal experiences but is also a teaching guide, with the content presented in a simple yet effective manner. Sadhguru Vasudev is an unconventional guru who is crazy about fast cars and planes and has an amazing sense of humour.",
    price: 217.0,
  },
  {
    id: 10,
    name: "Don’t Polish Your Ignorance...",
    image: Polish,
    desc: "The persistent questions of seekers fill this book. It's all here; the pain, the confusion, the raging gut-level thirst - All that it means human and alive and wanting. Through it all are the clear, strong, and unwavering tones of a master who reminds us that the only thing that lies between the human being and the divine, between the finite and the boundless, between seeking and finding, is choice. What does choice entail? Not the acquisition of any path-breaking wisdom, but a determined refusal to strengthen one's ignorance, to reinforce one's deceptions, to 'gold-plate one's limitations'. The danger, Sadhguru tells us does not lie in being in the dark; that can be dispelled for anyone who genuinely desires it, but in settling for an easy brilliance, a spurious radiance. The danger does not lie in seeking urgently, but in arriving cheaply. 'Don't polish your ignorance,' he warns. 'It may shine'",
    price: 248.0,
  },
  {
    id: 11,
    name: "Youth and Truth",
    image: Youth,
    desc: "What happens when millennials meet a mystic? An avalanche of queries and an unflinching stream of answers. In this compilation of five talks from Youth and Truth events, Sadhguru fields questions that are quirky, personal, profound and shockingly bold from university students.In a camaraderie bridging age, they adventure through a mind-boggling spectrum of subjects like romance and sexuality, loneliness and jealousy, parenting and education, career and business, politics and spirituality, artificial intelligence, racism, drugs, food, Yogic sciences, and god-making. Equally wide-ranging is the mood of the talks - from playfulness and hilarity to moments of gobsmacked speechlessness, dawning clarity and paradigm shifts, all infused with the fizzing energy of youth.Here is a book not just for youth, but for the youthful in search of truth.",
    price: 180.0,
  },
  {
    id: 12,
    name: "Himalayan Lust",
    image: Himalaya,
    desc: "Every year, a group of Isha meditators sets out on a tour of the Himalayas. Accompanying them on this journey is Sad guru -a spiritual master considered by many to be one of the foremost living yogis on the planet. This is a book for those who stayed behind. It is a chance to make a pilgrimage on the page, travelling through the unpredictable but fascinating terrain of the master's words. Amalgamating discourses and conversations from several yatras, it is a blend of the specific and the timeless. This book is not just about the Himalayas and yet, the book would never have happened without the Himalayas. The mountains play a vital role in the text, alternately as context and catalyst, mood and metaphor. Without them, some of the questions in this book would never have been asked. Even if they sometimes seem tangential to the line of enquiry, they remain a powerful subterranean presence, eventually becoming the very bedrock of this book.",
    price: 220.0,
  },
];

export default AllProducts;
