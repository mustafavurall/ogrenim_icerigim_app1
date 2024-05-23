export function getFormattedDate(date){
//boşluk sorununun giderilmesi için
    return `${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()} `;

}
// bir haftaki önceki tarihi geri dönderecek
export function getLastWeek(date,days){
return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days);

}