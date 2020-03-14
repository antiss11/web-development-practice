function zeroPrint() {
    // Вывести на экран пять строк из нулей, причем количество нулей в каждой строке равно номеру строки.
    for (let i = 1; i <= 5; i++) {
        document.write("0".repeat(i) + "<br>");
    }
}

function aRectangle() {
    // Вывести на экран прямоугольник, заполненный буквами А. Количество строк в прямоугольнике равно 5, количество столбцов равно 8.
    let rows = 5;
    let cols = 8;
    for (let row = 0; row < rows; row++) {
        document.write("A".repeat(cols) + "<br>");
    }
}

function calc1() {
    // Вычислите |x|+x^5, если x=−2.
    let x = -2;
    document.write(Math.abs(x) + Math.pow(x, 5));
}

function calc2() {
    // Вычислите значение выражения (x+1)^2+3(x+1) при а) x=1.7; б) x=3.
    calculate = x => Math.pow((x+1), 2) + 3*(x+1);
    let x = 1.7;
    document.write(calculate(x) + "<br>"); 
    x = 3;
    document.write(calculate(x) + "<br>");
}

function calc3() {
    // Вычислите значение выражения (|x−5|-sinx)/3 + sqrt(x^2+2014) * cos2x-3 при x=−2.34.
    let x = -2.34;
    let result = (Math.abs(x-5) - Math.sin(x)) / 3 + Math.sqrt(Math.pow(x, 2) + 2014) * Math.cos(2*x) - 3;
    document.write(result)
}

function calc4() {
    // Вычислите значение выражения e^(x−2)+|sin(x)|−x^4⋅cos(1/x) при x=3.6
    let x = 3.6;
    let result = Math.exp(x-2) + Math.abs(Math.sin(x)) - Math.pow(x, 4) * Math.cos(1/x);
    document.write(result);
}

function task1() {
    // Дано трехзначное число. Переставьте первую и последнюю цифры.
    let x = 123;
    let xStr = "" + x;
    [xStr[0], xStr[3]] = [xStr[3], xStr[0]];
    let result = +xStr;
    document.write(result)
}

function task2() {
    // Дано четырехзначное число. Определите, есть ли одинаковые цифры в нем.
    let x = 1234;
    let xArray = (""+x).split("");
    let xSortedArray = xArray.sort();
    let xFilteredArray = xArray.filter((v, i, a) => a.lastIndexOf(v) == i);   
    document.write(!(xFilteredArray.length == xArray.length));  
}

function task3() {
    // Дано пятизначное число. Цифры на четных позициях занулить. Например, из 12345 получается число 10305.
    let x = 12345;
    let xArray = ("" + x).split("");
    xArray.forEach( (v, i, a) => i++ % 2 == 0 ? a[i] = 0: undefined);
    let result = xArray.join("");
    document.write(result);
}

function task4() {
    // Даны два трехзначных числа. Найдите шестизначное число, образованное из двух данных чисел путем дописывания второго числа к первому справа.
    let a = 123;
    let b = 456;
    let result = +("" + a + b);
    document.write(result);
}

function task5() {
    // Дано четырехзначное число. Если оно читается слева направо и справа налево одинаково, то вывести yes, иначе no.
    let x = 1234;
    let xReverse = +("" + x).split("").reverse().join("");    
    document.write(xReverse == x ? "yes" : "no");
}

function task5() {
    // Дано четырехзначное число. Переставьте местами цифры так, чтобы сначала оказались цифры, меньшие пяти.
    let x = 298471;
    let xArray = ("" + x).split("");
    let result = xArray.sort( (a, b) => 5 - b);
    document.write(+result.join(""))
}

function task6() {
    // Даны два трехзначных числа. Получите новое число присоединением второго числа справа к первому без последних цифр у каждого. Например, 123 и 456 Ответ: 1245
    let a = 123;
    let b = 456;
    let result = ("" + a).slice(0, -1) + ("" + b).slice(0, -1);
    document.write(result);
}

function task7() {
    // Дано четырехзначное число. Поменяйте местами наименьшую и наибольшую цифры.
    let x = 1234;
    let xArray = ("" + x).split("");
    let min = Math.min(...xArray);
    let minIndex = ("" + x).indexOf(min);
    let max = Math.max(...xArray);
    let maxIndex = ("" + x).indexOf(max);
    xArray[minIndex] = max;
    xArray[maxIndex] = min;
    document.write(Number(xArray.join("")));
}

function task8() {
    // Даны коэффициенты a,b,c уравнения ax^2+bx+c=0. Найти решение.
    let a = 1;
    let b = 2;
    let c = 3;
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant === 0) {
        var answer = -b / (2 * a);
    }
    else if (discriminant < 0) {
        var answer = undefined;
    }
    else if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        var answer = [root1, root2];
    }
    answer ? document.write("answer") : document.write("Корней нет");
}

function task9() {
    // Пользователь вводит три числа - длины сторон треугольника. Найти площадь треугольника. Сделать проверку на существование треугольника (например, 1, 2, 3 - такого треугольника не существует).
    let x = +prompt("Введите длину первой стороны");
    let y = +prompt("Введите длину второй стороны");
    let z = +prompt("Введите длину третьей стороны");
    if (x + y > z && x + z > y && y + z > x) {
        let p = (x + y + z) / 2;
        let square = Math.sqrt(p * (p - x) * (p - y) * (p - z));
        document.write(square);
    }
    else {
        document.write("Треугольник не существует")
    }
}

function task10() {
    // Даны числа h и m, где h - количество часов, m - количество минут некоторого момента времени. Найдите угол между часовой и минутными стрелками в этот момент времени.
    let h = 1;
    let m = 0;
    while (h >= 12) {
        h -= 12;
    }
    while (m >= 60) {
        m -= 60;
    }
    let hDegree = h * 180 / 12;
    let mDegree = m * 180 / 60;
    let diff = Math.abs(hDegree - mDegree);
    document.write(diff);
}



