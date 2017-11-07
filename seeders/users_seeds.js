'use strict';

module.exports = {
  up: (queryInterface, Sequelize)  => {
    return queryInterface.bulkInsert('users', [
        { first_name: "Wan",
          last_name: "Valdez",
          sex: "Male",
          age: 47,
          tag_line: "Who is your daddy?",
          sms_phone: "555.1234",
          user_name: "chachi@fonz.com",
          password: "GoPoundSaltDirtBag",
          profile_pic: "https://www.pinterest.com/pin/11399805284338369/"
        },
        { first_name: "Jim",
          last_name: "Bailey",
          sex: "Male",
          age: 34,
          tag_line: "Whatever",
          sms_phone: "756.8990",
          user_name: "jim@email.com",
          password: "jimbailey",
          profile_pic: "https://s-i.huffpost.com/gen/1065394/images/o-DRAG-QUEENS-facebook.jpg"
        },
        { first_name: "Warrior",
          last_name: "Princess",
          sex: "Female",
          age: 35,
          tag_line: "Looking for a battle",
          sms_phone: "123.3456",
          user_name: "xena@email.com",
          password: "warriorprincess",
          profile_pic: "https://vignette4.wikia.nocookie.net/warriorprincess/images/5/59/Xena_warrior_princess_by_xena_96-d56o27k.jpg/revision/latest?cb=20130815215113https://static.wixstatic.com/media/a6f4a9_c7c670f8ba724db0a07cf85da442d7e4~mv2.jpg"
        },
        { first_name: "Todd",
          last_name: "Jones",
          sex: "Male",
          age: 40,
          tag_line: "Hey there!!",
          sms_phone: "556.7890",
          user_name: "toad@email.com",
          password: "toddjones",
          profile_pic: "https://static.wixstatic.com/media/a6f4a9_c7c670f8ba724db0a07cf85da442d7e4~mv2.jpg"
        },
        { first_name: "Jared",
          last_name: "Fogle",
          sex: "Male",
          age: 40,
          tag_line: "How old r U?",
          sms_phone: "334.7878",
          user_name: "jared@email.com",
          password: "jaredfogle",
          profile_pic: "https://the-hollywood-gossip-res.cloudinary.com/iu/s--FpbYh7Gu--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1489513996/jared-fogle-in-a-bowtie.jpg"
        },
        { first_name: "Popcorn",
          last_name: "Sutton",
          sex: "Male",
          age: 65,
          tag_line: "Know a good lawyer?",
          sms_phone: "908-7878",
          user_name: "pop@email.com",
          password: "popcornsutton",
          profile_pic: "http://media-cdn.timesfreepress.com/img/photos/2014/06/05/866912_t300_t755_he12b112dc0f2a87c390507e9c8ab5039eedb0fe8.JPG"
        },
        { first_name: "Bob",
          last_name: "Marley",
          sex: "Male",
          age: 36,
          tag_line: "It's natural",
          sms_phone: "420.1212",
          user_name: "bm@email.com.com",
          password: "bobmarley",
          profile_pic: "https://i.pinimg.com/736x/7a/dc/ba/7adcba2fde48dab0adfdcc3efcf8e879--musique-reggae-bob-marley.jpg"
        },
        { first_name: "Jack",
          last_name: "Daniels",
          sex: "Male",
          age: 24,
          tag_line: "I need to grow up",
          sms_phone: "777.4501",
          user_name: "jack@email.com",
          password: "jackdaniels",
          profile_pic: "https://katieholt1.files.wordpress.com/2010/10/oslo_passout.jpg"
        },
        { first_name: "Candy",
          last_name: "Cane",
          sex: "Female",
          age: 23,
          tag_line: "Yes",
          sms_phone: "444.9988",
          user_name: "sugar@email.com",
          password: "candycane",
          profile_pic: "https://img00.deviantart.net/2892/i/2008/094/2/4/drug_girl_by_aurorabeaupre.jpg"
        },
        { first_name: "Granny",
          last_name: "Moses",
          sex: "Female",
          age: 80,
          tag_line: "$&!% the police",
          sms_phone: "912.3900",
          user_name: "granny@email.com",
          password: "grannymoses",
          profile_pic: "https://i.pinimg.com/736x/63/f9/ea/63f9eaf4ff430456106e22abb9732d7b--irene-ryan-ryan-oneal.jpg"
        },
        { first_name: "Billy",
          last_name: "Graham",
          sex: "Male",
          age: 98,
          tag_line: "God is watching",
          sms_phone: "666.6666",
          user_name: "will@email.com",
          password: "billygraham",
          profile_pic: "https://i.pinimg.com/736x/63/f9/ea/63f9eaf4ff430456106e22abb9732d7b--irene-ryan-ryan-oneal.jpg"
        },
        { first_name: "Angelina",
          last_name: "Jolie",
          sex: "Female",
          age: 42,
          tag_line: "Know a good baby sitter",
          sms_phone: "355.6700",
          user_name: "ang@email.com",
          password: "angelinajolie",
          profile_pic: "https://www.thesun.co.uk/wp-content/uploads/2016/10/nintchdbpict000160735799.jpg?w=640"
          },
        { first_name: "Hunter",
          last_name: "Thompson",
          sex: "Male",
          age: 65,
          tag_line: "I need a drink",
          sms_phone: "088.9999",
          user_name: "coke@email.com",
          password: "hunterthompson",
          profile_pic: "https://www.thesun.co.uk/wp-content/uploads/2016/10/nintchdbpict000160735799.jpg?w=640"
        },
        { first_name: "Elmer",
          last_name: "Fudd",
          sex: "Male",
          age: 35,
          tag_line: "I work for PETA",
          sms_phone: "705.0139",
          user_name: "fudd@email.com",
          password: "elmerfudd",
          profile_pic: "https://static.comicvine.com/uploads/original/11/111746/4352026-4927658174_981e6cd63e_z.jpg"
          },
        { first_name: "Casey",
          last_name: "Anthony",
          sex: "Female",
          age: 31,
          tag_line: "Where is my daughter?",
          sms_phone: "701.1257",
          user_name: "kc@email.com",
          password: "kcanthony",
          profile_pic: "https://static.comicvine.com/uploads/original/11/111746/4352026-4927658174_981e6cd63e_z.jpg"
        },
        { first_name: "Snoop",
          last_name: "Dawg",
          sex: "Male",
          age: 46,
          tag_line: "I never inhale",
          sms_phone: "913.4200",
          user_name: "smoke@email.com",
          password: "snoopdawg",
          profile_pic: "http://www.chartattack.com/wp-content/uploads/2016/10/snoop-dogg-marijuana.jpg"
        },
        { first_name: "Martha",
          last_name: "Stewart",
          sex: "Female",
          age: 70,
          tag_line: "What's insider trading?",
          sms_phone: "501.9930",
          user_name: "foodie@email.com",
          password: "marthastewart",
          profile_pic: "http://a.abcnews.com/images/Entertainment/GTY_martha_stewart_sk_140306_16x9_608.jpg"
        },
        { first_name: "Jim",
          last_name: "Morrison",
          sex: "Male",
          age: 27,
          tag_line: "I am the lizard king",
          sms_phone: "409.1970",
          user_name: "jm@email.com.com",
          password: "jimmorrison",
          profile_pic: "http://i.axs.com/2014/08/promoted-media-optimized_53e3a6f8954c3.jpg"
        },
        { first_name: "Kate",
          last_name: "Gosselin",
          sex: "Female",
          age: 42,
          tag_line: "Where are my kids?",
          sms_phone: "222.1020",
          user_name: "kateplus8@email.com",
          password: "kategosselin",
          profile_pic: "http://images.gawker.com/17iuol0zjbta5jpg/original.jpg"
        },
        { first_name: "Betty",
          last_name: "Bottle",
          sex: "Female",
          age: 25,
          tag_line: "I'll drink that!",
          sms_phone: "191.1209",
          user_name: "betty@email.com",
          password: "bettybottle",
          profile_pic: "http://tarabliss.com.au/wp-content/uploads/2013/03/PGG2P.jpg"
        },
        { first_name: "Janis",
          last_name: "Joplin",
          sex: "Female",
          age: 27,
          tag_line: "Hey Man!",
          sms_phone: "235.6509",
          user_name: "janis@email.com",
          password: "janisjoplin",
          profile_pic: "http://d1wl13ohcvociy.cloudfront.net/wp-content/uploads/2015/09/tumblr_meyke7bh8u1rwkvi9o1_500.jpg"
        },
        { first_name: "Tina",
          last_name: "Turner",
          sex: "Female",
          age: 65,
          tag_line: "What's love gotta do with it?",
          sms_phone: "222.5126",
          user_name: "tina@email.com",
          password: "tinaturner",
          profile_pic: "https://i.pinimg.com/originals/46/cb/bf/46cbbf36cedb467f8b3d9a532374bb6e.jpg"
        },
        { first_name: "Jame",
          last_name: "Gumb",
          sex: "Male",
          age: 36,
          tag_line: "Put the lotion in the basket",
          sms_phone: "888.0000",
          user_name: "skinned@email.com",
          password: "jamegumb",
          profile_pic: "http://bh-s2.azureedge.net/bh-uploads/2016/01/Buffalo_Bill_House_03-735x525.jpg"
        },
        { first_name: "Olive",
          last_name: "Oyl",
          sex: "Female",
          age: 32,
          tag_line: "I don't eat spinach",
          sms_phone: "309.2198",
          user_name: "olive@email.com",
          password: "oliveoyl",
          profile_pic: "https://i.pinimg.com/originals/49/4f/b6/494fb69b84bc559029737b792a3953aa.jpg"
        },
        { first_name: "Annie",
          last_name: "Wilkes",
          sex: "Female",
          age: 47,
          tag_line: "You dirty bird",
          sms_phone: "405.2954",
          user_name: "annie@email.com",
          password: "anniewilkes",
          profile_pic: "http://theycutthepower.com/wp-content/uploads/2014/06/Annie-Wilkes-Misery-3.jpg"
        },
        { first_name: "Spuds",
          last_name: "Mackenzie",
          sex: "Male",
          age: 22,
          tag_line: "Hey, I'm a dog!",
          sms_phone: "406.9254",
          user_name: "spuds@email.com",
          password: "spudsmackenzie",
          profile_pic: "http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/spudsmackenzie.jpg"
        },
        { first_name: "Taylor",
          last_name: "Swift",
          sex: "Female",
          age: 27,
          tag_line: "I stay out too late",
          sms_phone: "206.9245",
          user_name: "swift@email.com",
          password: "taylorswift",
          profile_pic: "http://www.billboard.com/files/styles/article_main_image/public/media/taylor-swift-2014-sarah-barlow-billboard-650.jpg"
        },
        { first_name: "Serena",
          last_name: "Williams",
          sex: "Female",
          age: 36,
          tag_line: "Tennis anyone?",
          sms_phone: "906.1245",
          user_name: "sw@email.com",
          password: "serenawilliams",
          profile_pic: "http://www.heelshield.com/wp-content/uploads/2012/08/serena-williams-victoria-beckham-red-dress-david-letterman-2012-beauty-and-the-beat-blog.jpg"
        },
        { first_name: "Fishy",
          last_name: "Freddy",
          sex: "Male",
          age: 28,
          tag_line: "Just fishing around for a good time",
          sms_phone: "106.7245",
          user_name: "ff@email.com",
          password: "fishyfreddy",
          profile_pic: "http://laoblogger.com/images/animated-fish-clipart-for-mobile-7.jpg"
        },
        { first_name: "Rachel",
          last_name: "Green",
          sex: "Female",
          age: 30,
          tag_line: "Being alone sucks",
          sms_phone: "776.1324",
          user_name: "rg@email.com",
          password: "rachelgreen",
          profile_pic: "http://images2.fanpop.com/images/photos/5300000/Rachel-Green-Friends-tv-characters-5385847-460-346.jpg"
        },
        { first_name: "Holly",
          last_name: "Golightly",
          sex: "Female",
          age: 24,
          tag_line: "It may be normal, darling; but I'd rather be natural",
          sms_phone: "726.1245",
          user_name: "hg@email.com",
          password: "hollygolightly",
          profile_pic: "https://evesreellife.files.wordpress.com/2013/03/icon_opt.jpg"
        },
        { first_name: "Walter",
          last_name: "White",
          sex: "Male",
          age: 50,
          tag_line: "I'm the one who knocks",
          sms_phone: "226.5401",
          user_name: "heisenberg@email.com",
          password: "walterwhite",
          profile_pic: "https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/iifttghw2vaogdfd3sdn.jpg"
        },
        { first_name: "Zombie",
          last_name: "Nicole",
          sex: "Female",
          age: 25,
          tag_line: "Recently divorced girl nextdoor",
          sms_phone: "746.1481",
          user_name: "nicole@email.com",
          password: "zombienicole",
          profile_pic: "http://www.fancypantsstore.com/ekmps/shops/fancypantsstore/images/Zombie-Bride-[1]-448-p.jpg"
        },
        { first_name: "Phil",
          last_name: "McGraw",
          sex: "Male",
          age: 67,
          tag_line: "And how's that working for ya?",
          sms_phone: "648.2711",
          user_name: "drphil@email.com",
          password: "drphil",
          profile_pic: "http://www.tvovermind.com/wp-content/uploads/2017/02/Dr-Phil_Show_Harpo-670x388.jpg"
        },
        { first_name: "Lady",
          last_name: "Gaga",
          sex: "Female",
          age: 31,
          tag_line: "Be Unique!!",
          sms_phone: "899.5500",
          user_name: "gaga@email.com",
          password: "ladygaga",
          profile_pic: "https://pbs.twimg.com/profile_images/833109600660512772/ss9-ojz7.jpg"
        }
    ]);
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};