// Shows.remove({});
// Meteor.users.update({}, {$set: { 'shows': {} }});

if(Shows.find().count() === 0) {

  Shows.insert({
    name: "Doctor Who (2005)",
    picture: "placeholder",
    episodesInSeasons: [14, 14, 14, 18, 14, 14, 14],
    seasons: 7
  });

  Shows.insert({
    name: "Veronica Mars",
    picture: "placeholder",
    episodesInSeasons: [22, 22, 20],
    seasons: 3
  });

  Shows.insert({
    name: "Breaking Bad",
    picture: "placeholder",
    episodesInSeasons: [7, 13, 13, 13, 16],
    seasons: 5
  });

  Shows.insert({
    name: "Game of Thrones",
    picture: "placeholder",
    episodesInSeasons: [10, 10, 10],
    seasons: 3
  });

  Shows.insert({
    name: "Under the Dome",
    picture: "placeholder",
    episodesInSeasons: [10],
    seasons: 1
  });

  Shows.insert({
    name: "Psych",
    picture: "placeholder",
    episodesInSeasons: [15, 16, 16, 16,16,16,16],
    seasons: 7
  });


  Shows.insert({
    name: "Dr. House",
    picture: "placeholder",
    episodesInSeasons: [22, 24, 24, 16,24,22,23, 22],
    seasons: 8
  });


  Shows.insert({
    name: "Lost",
    picture: "placeholder",
    episodesInSeasons: [25, 24, 23, 14,17,18],
    seasons: 6
  });


  Shows.insert({
    name: "How I Met Your Mother",
    picture: "placeholder",
    episodesInSeasons: [22, 22, 20, 24, 24, 24, 24, 24],
    seasons: 8
  });


  Shows.insert({
    name: "The Big Bang Theory",
    picture: "placeholder",
    episodesInSeasons: [17, 23, 23, 24, 24, 24],
    seasons: 6
  });


  Shows.insert({
    name: "Two and a Half Men",
    picture: "placeholder",
    episodesInSeasons: [24, 24, 24, 24, 19, 24, 22, 16, 24, 23],
    seasons: 10
  });


  Shows.insert({
    name: "Grey's Anatomy",
    picture: "placeholder",
    episodesInSeasons: [9, 27, 25, 17, 24, 24, 22, 24, 24],
    seasons: 9
  });

  Shows.insert({
    name: "Vampire Diaries",
    picture: "placeholder",
    episodesInSeasons: [22, 22, 22, 23],
    seasons: 4
  });


  Shows.insert({
    name: "Gossip Girl",
    picture: "placeholder",
    episodesInSeasons: [18, 25, 22, 22, 24, 10],
    seasons: 6
  });


  Shows.insert({
    name: "Simpsons",
    picture: "placeholder",
    episodesInSeasons: [13, 22, 24, 22, 22, 25, 25, 25, 25, 22, 22, 21, 22, 22, 22, 21, 22, 22, 20, 21, 23, 22, 22, 22],
    seasons: 24
  });

  Shows.insert({
    name: "The Walking Dead",
    picture: "placeholder",
    episodesInSeasons: [6, 13, 16],
    seasons: 3
  });


  Shows.insert({
    name: "Supernatural",
    picture: "placeholder",
    episodesInSeasons: [22, 22, 16, 22, 22, 22, 23, 23],
    seasons: 8
  });


  Shows.insert({
    name: "Dexter",
    picture: "placeholder",
    episodesInSeasons: [12, 12, 12, 12, 12, 12, 12, 12],
    seasons: 8
  });

  Shows.insert({
    name: "Desperate Housewives",
    picture: "placeholder",
    episodesInSeasons: [23, 24, 23, 17, 24, 23, 23, 23],
    seasons: 8
  });

  Shows.insert({
    name: "The Mentalist",
    picture: "placeholder",
    episodesInSeasons: [23, 23, 24, 24, 22],
    seasons: 5
  });


  Shows.insert({
    name: "Family Guy",
    picture: "placeholder",
    episodesInSeasons: [7, 21, 22, 30, 18, 12, 16, 21, 18, 23, 22],
    seasons: 11
  });


  Shows.insert({
    name: "Scrubs",
    picture: "placeholder",
    episodesInSeasons: [24, 22, 22, 25, 24, 22, 11, 19, 13],
    seasons: 9
  });

  Shows.insert({
    name: "One Tree Hill",
    picture: "placeholder",
    episodesInSeasons: [22, 23, 22, 21, 18, 24, 22, 22, 13],
    seasons: 9
  });

  Shows.insert({
    name: "One Piece",
    picture: "placeholder",
    episodesInSeasons: [611],
    seasons: 1
    });

  Shows.insert({
    name: "Naruto",
    picture: "placeholder",
    episodesInSeasons: [220],
    seasons: 1
  });


  Shows.insert({
    name: "Naruto Shippuden",
    picture: "placeholder",
    episodesInSeasons: [332],
    seasons: 1
  });


  Shows.insert({
    name: "Dragon Ball Z",
    picture: "placeholder",
    episodesInSeasons: [291],
    seasons: 1
  });


  Shows.insert({
    name: "Vikings",
    picture: "placeholder",
    episodesInSeasons: [9],
    seasons: 1
  });


  Shows.insert({
    name: "Sons of Anarchy",
    picture: "placeholder",
    episodesInSeasons: [13, 13, 13, 13, 13],
    seasons: 6
  });


  Shows.insert({
    name: "Life",
    picture: "placeholder",
    episodesInSeasons: [11, 21],
    seasons: 2
  });


  Shows.insert({
    name: "Homeland",
    picture: "placeholder",
    episodesInSeasons: [12,12],
    seasons: 2
  });

  Shows.insert({
    name: "Smallville",
    picture: "placeholder",
    episodesInSeasons: [21, 23, 22, 22, 22, 22, 20, 22, 21, 22],
    seasons: 10
  });


  Shows.insert({
    name: "The Tudors",
    picture: "placeholder",
    episodesInSeasons: [10, 10, 8, 10],
    seasons: 4
  });


  Shows.insert({
    name: "Spartacus",
    picture: "placeholder",
    episodesInSeasons: [13, 10, 10],
    seasons: 3
  });

  Shows.insert({
    name: "Rome",
    picture: "placeholder",
    episodesInSeasons: [12, 10],
    seasons: 2
  });


  Shows.insert({
    name: "The White Queen",
    picture: "placeholder",
    episodesInSeasons: [10],
    seasons: 1
  });


  Shows.insert({
    name: "Neon Genesis Evangelion",
    picture: "placeholder",
    episodesInSeasons: [26],
    seasons: 1
  });

  Shows.insert({
    name: "Stargate SG-1",
    picture: "placeholder",
    episodesInSeasons: [21, 22, 22, 22, 22, 22, 22, 20, 20, 20],
    seasons: 10
  });


  Shows.insert({
    name: "Stargate Atlantis",
    picture: "placeholder",
    episodesInSeasons: [20, 20, 20, 20, 20],
    seasons: 5
  });


  Shows.insert({
    name: "Stargate Universe",
    picture: "placeholder",
    episodesInSeasons: [20, 20],
    seasons: 2
  });


  Shows.insert({
    name: "True Blood",
    picture: "placeholder",
    episodesInSeasons: [12, 12, 12, 12, 12, 10],
    seasons: 6
  });


  Shows.insert({
    name: "Bleach",
    picture: "placeholder",
    episodesInSeasons: [366],
    seasons: 1
  });


  Shows.insert({
    name: "Bones",
    picture: "placeholder",
    episodesInSeasons: [22, 21, 15, 26, 22, 23, 13, 24],
    seasons: 8
  });


  Shows.insert({
    name: "Angel",
    picture: "placeholder",
    episodesInSeasons: [22, 22, 22, 22, 22],
    seasons: 5
  });


  Shows.insert({
    name: "Charmed",
    picture: "placeholder",
    episodesInSeasons: [22, 22, 22, 22, 23, 23, 22, 22],
    seasons: 8
  });


  Shows.insert({
    name: "Buffy the Vampire Slayer",
    picture: "placeholder",
    episodesInSeasons: [12, 22, 22, 22, 22, 22, 22],
    seasons: 7
  });

  Shows.insert({
    name: "Futurama",
    picture: "placeholder",
    episodesInSeasons: [13, 19, 22, 18, 16, 26, 26],
    seasons: 7
  });

  Shows.insert({
    name: "Eureka",
    picture: "placeholder",
    episodesInSeasons: [12, 13, 18, 21, 13],
    seasons: 5
  });

  Shows.insert({
    name: "Andromeda",
    picture: "placeholder",
    episodesInSeasons: [22, 22, 22, 22, 22],
    seasons: 5
  });

  Shows.insert({
    name: "Terminator: TSCC",
    picture: "placeholder",
    episodesInSeasons: [9, 22],
    seasons: 2
  });

  Shows.insert({
    name: "Person of Interest",
    picture: "placeholder",
    episodesInSeasons: [23, 22],
    seasons: 2
  });


  Shows.insert({
    name: "Law & Order: UK",
    picture: "placeholder",
    episodesInSeasons: [7, 6, 7, 6, 6, 7, 6, 8],
    seasons: 7
  });


  Shows.insert({
    name: "Law & Order: SVU",
    picture: "placeholder",
    episodesInSeasons: [22, 21, 23, 25, 25, 23, 22, 22, 19, 22, 24, 24, 23, 24],
    seasons: 14
  });


  Shows.insert({
    name: "Law & Order: CI",
    picture: "placeholder",
    episodesInSeasons: [22, 23, 21, 23, 22, 22, 22, 16, 16, 8],
    seasons: 10
  });


  Shows.insert({
    name: "Law & Order: LA",
    picture: "placeholder",
    episodesInSeasons: [22],
    seasons: 1
  });


  Shows.insert({
    name: "CSI: Las Vegas",
    picture: "placeholder",
    episodesInSeasons: [23, 23, 23, 23, 25, 24, 24, 17, 24, 23, 22, 22, 22],
    seasons: 13
  });


  Shows.insert({
    name: "CSI: Miami",
    picture: "placeholder",
    episodesInSeasons: [24, 24, 24, 25, 24, 21, 25, 24, 22, 19],
    seasons: 10
  });


  Shows.insert({
    name: "Elementary",
    picture: "placeholder",
    episodesInSeasons: [24],
    seasons: 1
  });


  Shows.insert({
    name: "CSI: NY",
    picture: "placeholder",
    episodesInSeasons: [23, 24, 24, 21, 25, 23, 22, 18, 17],
    seasons: 9
  });


  Shows.insert({
    name: "Six Feet Under",
    picture: "placeholder",
    episodesInSeasons: [13, 13, 13, 12, 12],
    seasons: 5
  });


  Shows.insert({
    name: "The Borgias",
    picture: "placeholder",
    episodesInSeasons: [9, 10, 10],
    seasons: 3
  });


  Shows.insert({
    name: "Borgia",
    picture: "placeholder",
    episodesInSeasons: [12],
    seasons: 1
  });

}