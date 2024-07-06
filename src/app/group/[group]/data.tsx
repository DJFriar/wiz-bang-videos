export const categories = [
  { cat: 'AT', name: 'Assortments' },
  { cat: 'BR', name: 'Bottle Rocket' },
  { cat: 'CF', name: 'Confetti' },
  { cat: 'FE', name: 'Fuses' },
  { cat: 'FG', name: 'Fountains (1000g)' },
  { cat: 'FN', name: 'Fountains' },
  { cat: 'FR', name: 'Firecrackers' },
  { cat: 'FS', name: 'Firing Systems' },
  { cat: 'GM', name: 'Multi-Shot (500g)' },
  { cat: 'ME', name: 'Missiles' },
  { cat: 'MS', name: 'Multi-Shot (200g)' },
  { cat: 'MX', name: 'Multi-Shot (350g)' },
  { cat: 'NF', name: 'Novelties (Flying)' },
  { cat: 'NV', name: 'Novelties (Ground)' },
  { cat: 'PC', name: 'Parachutes' },
  { cat: 'PK', name: 'Punks' },
  { cat: 'RC', name: 'Roman Candles' },
  { cat: 'RL', name: 'Artillery Shells' },
  { cat: 'SK', name: 'Smoke Bombs' },
  { cat: 'SM', name: 'Saturn Missiles' },
  { cat: 'SN', name: 'Snappers' },
  { cat: 'SP', name: 'Sparklers' },
  { cat: 'SR', name: 'Stick Rockets' },
  { cat: 'TB', name: 'Tubes & NOABs' },
]

export const groupings = [
  { group: 'multi', name: 'Multi-Shot', categories: [ 'MS', 'MX', 'GM', 'TB' ]},
  { group: 'fountain', name: 'Fountains', categories: [ 'FG', 'FN' ]},
  { group: 'rocket', name: 'Rockets', categories: [ 'BR', 'ME', 'RC', 'SM', 'SR' ]},
  { group: 'novelty', name: 'Novelties', categories: [ 'CF', 'FR', 'NF', 'NV', 'PC', 'SK', 'SN', 'SP'  ]},
  { group: 'systems', name: 'Firing Systems', categories: [ 'FS', 'FE' ]},
  { group: 'artillery', name: 'Artillery Shells', categories: [ 'RL' ]},
]

export const fireworks = [
  { sku: 'BR101',	name: 'Moon Travelers with Report', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'BR103',	name: 'Whistling Moon Travelers With Report', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'CF127',	name: 'Party Popper', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'FG123',	name: 'Whack A Mole', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FG131',	name: 'Fantasy Reality', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FG133',	name: 'Eruption', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FG134',	name: 'Closed Caption', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN107',	name: 'Boom Barrel', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN120',	name: 'Machine Gun Kelly', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN127',	name: 'America Forever', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN131',	name: 'After the Hunt', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN140',	name: 'Mount Taal - 6" Cone', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN142',	name: 'Star Factor', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN143',	name: 'Blaze', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN146',	name: 'Dueling Pistol', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN147',	name: 'Cobra', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN150',	name: 'Watermelon Ninja', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN155',	name: 'Dagger', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN164',	name: 'Loot Box', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN365',	name: 'Snow Cone', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN385',	name: 'Koi Pond', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN396',	name: 'Snow Cone, Jr.', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN430',	name: 'Smash Hit', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN463',	name: 'Grand Cannon', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN466',	name: 'Tiny Tug', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN475',	name: 'Neon Nights', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FN480',	name: 'Sawworks', group: 'fountain', hasVideo: true, price: '' },
  { sku: 'FR280',	name: 'Cherry Bomb Firecrackers 16s', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'FR285',	name: 'Cherry Bomb Firecrackers 200s', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'FR286',	name: 'Cherry Bomb Firecrackers 1,000s', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'FS304',	name: 'IGNITE Lite Electronic Ignition System', group: 'systems', hasVideo: true, price: '' },
  { sku: 'FS305',	name: 'IGNITE Lite Clip-On Igniters (20 pack)', group: 'systems', hasVideo: true, price: '' },
  { sku: 'GM108',	name: 'Printer Malfunction', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM116',	name: 'Backyard King', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM119',	name: 'American Glory', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM121',	name: 'Saturday Night Special', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM136',	name: 'Viva Mexico', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM141',	name: 'Black Dragon', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM151',	name: 'Jurassic Pork', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM152',	name: 'Shock the Monkey', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM180',	name: '1500-Gram Finale', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM180B', name: 'All-American 1000-Gram Finale', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM194',	name: 'America (est 1776)', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM199',	name: 'Brocade Blues', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM272',	name: 'Flip Flop Fly', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM497',	name: 'High Falutin', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM498',	name: 'Hit the Road Jack', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM634B', name: 'Rainbow', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM638',	name: 'Sweet Spot', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM641',	name: 'Crack of Dawn', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM750',	name: 'Monster Bucks', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM751',	name: 'Whistling Wings', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM866',	name: 'Bull Market', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM891',	name: 'Highway Robbery', group: 'multi', hasVideo: true, price: '' },
  { sku: 'GM983',	name: 'Carolina Reaper', group: 'multi', hasVideo: true, price: '' },
  { sku: 'ME100',	name: 'Sky Bacon Missile - 12"', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'ME101',	name: 'X-Wing Missile - 6"', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'MS108',	name: 'Twitter Glitter', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS113',	name: 'Garden in Spring', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS121',	name: 'Color Pearl 96s', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS138',	name: 'Bacon Trek', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS142',	name: 'Happy 49 Shots', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS150',	name: 'Patriotic American', group: 'multi', hasVideo: false, price: '' },
  { sku: 'MS151',	name: 'Gold Chainz', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS153',	name: 'TorchPig', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS428',	name: 'Suspended Animation', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS469B', name: 'Daytime Reveal - Blue', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS469P', name: 'Daytime Reveal - Pink', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS562',	name: 'Pheasant Hunt', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS570',	name: 'Pretty in Pink', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS635',	name: 'Money Box', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS637',	name: 'Uncle Ham', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MS639',	name: 'Reel American', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MX100',	name: 'Attack', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MX101',	name: 'Home On The Range', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MX157',	name: 'Striker Serpent', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MX158',	name: 'Greenheads', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MX159',	name: 'Wild Boar', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MX161',	name: 'Game Over', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MX165',	name: 'Ultimate Celebration', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MX173',	name: 'Gigablaster', group: 'multi', hasVideo: true, price: '' },
  { sku: 'MX182',	name: 'Blue Line', group: 'multi', hasVideo: true, price: '' },
  { sku: 'NF107',	name: 'Green Wasp', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NF112',	name: 'Ladybugs', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NF210',	name: 'Jet Fighter Trio', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NF211',	name: 'Air Force Fleet', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NF219',	name: 'Pigs Can Fly', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV102',	name: 'Naughty Dog', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV108',	name: 'Jumbo Crackling Ball', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV112',	name: 'Tank w/ Report', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV123A', name: 'Booby Trap', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV131',	name: 'Assorted Snake Bag', group: 'novelty', hasVideo: false, price: '' },
  { sku: 'NV132',	name: 'Snakes out of the Cave', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV133',	name: 'Premium Ground Bloom Flower', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV161',	name: 'Sky Bacon Spinners', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV180A', name: 'Fart Bags', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV182',	name: 'Stink Bombs', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV209A', name: 'Climbing Panda', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV293',	name: 'Normandy Landing Craft', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV316',	name: 'Spinning Firefly', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV319',	name: 'Half Ton', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV340',	name: 'Screeching Eagle', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'NV353',	name: 'Frog', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'PC146',	name: 'Princess Skydive', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'PC147',	name: 'Patriotic Skydive', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'PC149',	name: 'Giant Parachute 40-inch', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'RC101',	name: 'Bacon Bit Barrage', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'RC108',	name: 'Crazy Aces', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'RC123',	name: 'Super Gatling Blaster', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'RC233',	name: 'Roman Candle Poly Pack', group: 'rocket', hasVideo: false, price: '' },
  { sku: 'RC265',	name: 'Assorted Mini Candles', group: 'rocket', hasVideo: false, price: '' },
  { sku: 'RL105A', name: 'Premium Festival Balls 1" (Canisters)', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'RL114',	name: 'One-Inch Wonder', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'RL133',	name: '6" Ring Master', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'RL240A', name: '5" Hellcat Cans (60-gram Canisters)', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'RL240B', name: '5" Hellcat Cans - 60-Gram Canister Shells', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'RL292',	name: 'Close Combat', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'RL335',	name: '24 Turbo Charged - 1.5" Canister Shells', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'RL337',	name: 'Double Dragon - 6" Double-Break Canister', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'RL350',	name: 'Titanium Willow Shells - 5" Canister', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'RL360',	name: 'Festival Balls - 1.5" Ball Shells', group: 'artillery', hasVideo: true, price: '' },
  { sku: 'SK109',	name: 'Neon Smoke Balls Clay', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'SK111',	name: 'Jumbo Color Smoke Balls', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'SK115B', name: 'Color Military Smoke', group: 'novelty', hasVideo: false, price: '' },
  { sku: 'SK134',	name: 'Color Smoke Grenades', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'SK143',	name: 'Worlds Largest Smoke Ball', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'SK148',	name: 'Sword of Daylight', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'SM104',	name: 'Jumbo Saturn Missiles', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'SM128',	name: 'Flag Missile Battery', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'SM150',	name: 'Saturn Missile Battery', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'SM167',	name: 'Neon Saturn Missiles', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'SN109',	name: 'Americas Best Snappers (RWB)', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'SN115',	name: 'Bacon Snaps (Adult Snaps)', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'SN116',	name: 'Poppin Snaps', group: 'novelty', hasVideo: false, price: '' },
  { sku: 'SP008BC',	name: '#8 Bamboo Sparklers - Color', group: 'novelty', hasVideo: false, price: '' },
  { sku: 'SP116T', name: 'Morning Glory - 24in', group: 'novelty', hasVideo: true, price: '' },
  { sku: 'SP192',	name: 'Ten-Inch Sparklers (Wire)', group: 'novelty', hasVideo: false, price: '' },
  { sku: 'SR122',	name: 'Maximum Altitude - TX Legal', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'SR216',	name: 'Skybolt - TX Legal', group: 'rocket', hasVideo: true, price: '' },
  { sku: 'SR224',	name: 'Giant Texas Pop Rocket - TX Legal', group: 'rocket', hasVideo: false, price: '' },
  { sku: 'TB211',	name: 'Addicted to Loud', group: 'multi', hasVideo: true, price: '' },
  { sku: 'TB215',	name: 'Khaotic KaBoom', group: 'multi', hasVideo: true, price: '' },
  { sku: 'TB237',	name: 'Whacky Tobacky', group: 'multi', hasVideo: true, price: '' },
  { sku: 'TB247',	name: 'Unstoppable', group: 'multi', hasVideo: true, price: '' },
  { sku: 'TB248',	name: 'Monstrous Brocade Ring', group: 'multi', hasVideo: true, price: '' },
  { sku: 'TB261',	name: 'Immortal', group: 'multi', hasVideo: true, price: '' },
]
