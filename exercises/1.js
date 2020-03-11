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
    // Вычислите |x|+x5, если x=−2.
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
}