const name = "Shahul"

const Repo = 10

// console.log(name + "Has" + Repo + "Repositories")      // Old Method(Not recommended)

// Repo = 20    // Not Allowed

console.log(`${name} has ${Repo} Repositories`)      // String interpolation


console.log(`${Repo}`)


// const game = new String('Forza')            //original Value Will not be Changed

// console.log(game)

// console.log("Anchor:", game.anchor('anchor'));

// console.log("At:", game.at(1));

// console.log("Big:", game.big());

// console.log("Blink:", game.blink());

// console.log("Bold:", game.bold());

// console.log("charAt:", game.charAt(1));

// console.log("charCodeAt:", game.charCodeAt(1));

// console.log("codePointAt:", game.codePointAt(1));

// console.log("Concat:", game.concat(' Horizon'));

// console.log("EndsWith:", game.endsWith('a'));

// console.log("Fixed:", game.fixed());

// console.log("Fontcolor:", game.fontcolor('blue'));

// console.log("Fontsize:", game.fontsize(20));

// console.log("Includes:", game.includes('orz'));

// console.log("IndexOf:", game.indexOf('o'));

// console.log("IsWellFormed:", game.isWellFormed());

// console.log("Italics:", game.italics());

// console.log("LastIndexOf:", game.lastIndexOf('o'));

// console.log("Link:", game.link('http://example.com'));

// console.log("LocaleCompare:", game.localeCompare('forza'));

// console.log("Match:", game.match(/orz/));

// console.log("MatchAll:", [...game.matchAll(/orz/g)]);

// console.log("Normalize:", game.normalize());

// console.log("PadEnd:", game.padEnd(10, '!'));

// console.log("PadStart:", game.padStart(10, '!'));

// console.log("Repeat:", game.repeat(2));

// console.log("Replace:", game.replace('Forza', 'Gran Turismo'));

// console.log("ReplaceAll:", game.replaceAll('o', '0'));

// console.log("Search:", game.search('orz'));

// console.log("Slice:", game.slice(1, 4));

// console.log("Small:", game.small());

// console.log("Split:", game.split('r'));

// console.log("StartsWith:", game.startsWith('F'));

// console.log("Strike:", game.strike());

// console.log("Sub:", game.sub());

// console.log("Substr:", game.substr(1, 3));

// console.log("Substring:", game.substring(1, 3));

// console.log("Sup:", game.sup());

// console.log("toLocaleLowerCase:", game.toLocaleLowerCase());

// console.log("toLocaleUpperCase:", game.toLocaleUpperCase());

// console.log("toLowerCase:", game.toLowerCase());

// console.log("toUpperCase:", game.toUpperCase());

// console.log("Trim:", game.trim());

// console.log("TrimEnd:", game.trimEnd());

// console.log("TrimLeft:", game.trimLeft());

// console.log("ValueOf:", game.valueOf());

// console.log(game);


//****************************** Main Methods ****************************//

const drink = new String("Coca Cola")

console.log(drink);

console.log(drink.length);

console.log((drink.charAt(5)));

console.log(drink.indexOf('C'));

console.log(drink.substring(0,4));

console.log(drink.slice(-4));

console.log(drink.toUpperCase());

console.log(drink.toLowerCase());

const drink1 = new String("    Sprite    ")

console.log(drink1.length);

console.log(drink1.__proto__);

console.log(drink1.trim());

console.log(drink.split(''));

console.log(drink.split(' '));

console.log(drink1.replace('Sprite','Maaza'));

console.log(drink.includes('Cola'));

const str1 = "Thumbs"

const str2 = "Ups"

console.log(str1.concat('-',str2));

