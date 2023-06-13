//Uchta int qiymati berilgan abc, eng kattasini qaytaradi.

let a=4
let b=5
let c=6

if(a>b && a>c){
    console.log(a);

}else if(b>a && b>c){
    console.log(b);
}else if(c>a && c>b){
    console.log(c);
}

//2 int qiymati berilgan bo'lsa, ikkalasi ham 30..40 inklyuziv oralig'ida yoki ikkalasi ham 40..50 inklyuziv oralig'ida bo'lsa, true qiymatini qaytaring
let a1=37
let b1=47

if(((30<=a1 && a1<=40) && (30<=b1 && b1<=40)) || ((40<=a1 && a1<=50) && (40<=b1 && b1<=50))){
    console.log(true);
}else{
    console.log(false);
}

//2 ta musbat int qiymati berilgan boʻlsa, 10..20 inklyuziv oraligʻida boʻlgan kattaroq qiymatni qaytaring yoki bu oraliqda boʻlmasa, 0 qiymatini qaytaring.
if((10<=a1 && a1<=20) || (10<=b1 && b1<=20)){
    console.log(Math.max(a1,b1));
}else{
    console.log(0);
}

//Agar berilgan satrda 1 va 3 ta "e" belgilar bo'lsa, true qiymatini qaytaring
let str='heello'

    let count = 0;
  
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'e') {
        count++;
      }
    }
  
    console.log(count >= 1 && count <= 3); 
  

    //Ikki manfiy bo'lmagan int qiymatlari berilgan bo'lsa, agar ular 27 va 57 kabi oxirgi raqamga ega bo'lsa, true qiymatini qaytaring. E'tibor bering, % 'mod' operatori qoldiqlarni hisoblaydi, shuning uchun 17 % 10 7 ga teng

    if(a1%10==7 && b1%10==7){
        console.log(true);
    }else{
        console.log(false);
    }

    //Satr berilgan bo'lsa, oxirgi 3 ta belgi katta harf bilan yozilgan yangi qatorni qaytaring. Agar satrda 3 tadan kam belgi bo'lsa, unda nima bo'lsa katta harf bilan yozing. Esda tutingki, str.toUpperCase() satrning bosh harfli versiyasini qaytaradi.

    let l=str.length

    let str1=str.slice(l-3, l)
    if(l>3){
        console.log(str1.toUpperCase());
    }else{
        console.log(str.toUpperCase());
    }

//Bo'sh bo'lmagan satr va int N berilgan bo'lsa, char 0 dan boshlangan satrni, so'ngra satrning har N-chi belgisini qaytaring. Shunday qilib, agar N 3 bo'lsa, char 0, 3, 6, ... va hokazolardan foydalaning. N - 1 yoki undan ko'p.

let N=2
let text='Miracle'

    let result = '';
    
    for (var i = 0; i < text.length; i += N) {
      result += text[i];
    }
    
    console.log(result);
  
  