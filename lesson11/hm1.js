// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//

let for1 = document.forms.for1;
for1.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    console.log(name, age);
    localStorage.setItem('userData',JSON.stringify({name:name, age: age}))
};
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carAvto = document.forms.carAvto;
carAvto.onsubmit = function (e) {
    e.preventDefault()
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = [model, type, volume];
    let caar = JSON.parse(localStorage.getItem('caar'));
    if (!caar) {
        caar = [];
        caar.push(car);
        localStorage.setItem('caar', JSON.stringify('caar'))
    }else {
        caar.push(car);
        localStorage.setItem('caar', JSON.stringify('caar'))
    }
}
