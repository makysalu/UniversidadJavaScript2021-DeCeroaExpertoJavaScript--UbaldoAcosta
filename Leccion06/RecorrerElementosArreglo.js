let autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos[0]);
console.log(autos[2]);

for (let index = 0; index < autos.length; index++) {
    const element = autos[index];
    console.log(index+': '+element);
}

autos.forEach(auto => {
    console.log(auto);
});