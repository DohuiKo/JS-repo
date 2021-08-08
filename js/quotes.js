const quotes = [
{
    quote: "It is better to have loved and lost, than never to have loved at all",
    author: "Alfred, Lord Tennyson",
},
{
    quote: "There is always some madness in love. But there is also always some reason in madness",
    author: "Friedrich Nietzsche",
},
{
    quote: "Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies",
    author: "Alexander Pope",
},
{
    quote: "Love asks me no questions, and gives me endless support",
    author: " William Shakespeare",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote+"\n";
author.innerText = todaysQuote.author;