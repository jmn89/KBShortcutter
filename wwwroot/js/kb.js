const r1 = ["ESC", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", 
"F9", "F10", "F11", "F12", "PTSCRN", "PSEBRK", "INS", "DEL"];
const r2 = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
"-", "=", "BS", "HM"];
const r3 = ["TB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", 
"[", "]", "¬", "PGUP"];
const r4 = ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", 
"'", "#", "¬", "PGDN"];
const r5 = ["SHIFT", "\\", "Z", "X", "C", "V", "B", "N", "M", ",", 
".", "/", "SHIFT", "UP", "END"];
const r6 = ["CTRL", "FN", "WIN", "ALT", "SPACE", "ALTG", "CONTXT", 
"CTRL", "<", "DN", ">"];

const rowCount = 6;

window.onload = function() {
    $("#kb-module").append(newKB);
};

allRows = () => r1 + r2 + r3 + r4 + r5 + r6;
rowByNumber = number => [r1, r2, r3, r4, r5, r6][--number];
newKB = () => `<div class="kb">${getRows(rowCount)}</div>`;
getRows = (count) => count == 0 ? "" : getRows(count - 1) + `<div class="r r${count}">${getButtonRow(count)}</div>`;
getButtonRow = (rowNumber) => rowByNumber(rowNumber).map(getButton).join("");
function getButton(text)
{   
    return  `<div class="key" id="${text}">
                <div class="rbgGroup">
                    <div class="dot-container">
                        <div class="dot red"></div>
                        <div class="dot green"></div>
                        <div class="dot blue"></div>
                    </div>
                </div>
                <div class="txt"><div>${text}</div></div>
                <div class="single"></div>
            </div>`;
}