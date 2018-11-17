var names = [
    "Niki",
    "Pesho",
    "Ivo",
    "Dani",
    "Nikola",
    "Velin",
    "Sasho",
    "Georgi",
    "Ahmed",
    "Abdul"
];

var oddStudents=[];
for (var i=1; i<names.length; i+=2)
    {
        console.log(names[i]);
        oddStudents.push(names[i]);
    };

var evenStudents=[];
for (var i=0; i<names.length; i+=2)
    {
        console.log(names[i]);
        evenStudents.push(names[i]);
    };



numbers = [1,10,15,-44,77,105,206,6,7,9,555];
maxValue = 0;

for (var i=0; i<=maxValue; i++)
    {
        if (numbers[i] > maxValue)
            {
                maxValue = numbers[i];
            }
    };