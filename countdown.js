let p= document.createElement('p');
p.style.fontWeight="bold";
p.style.fontFamily ="comic sans ms";

p.style.textAlign = "center";
p.style.color ="blue";
document.body.append(p);

setTimeout(() =>{
    p.innerHTML= 10;
    setTimeout(() =>{
        p.innerHTML= 9;
        setTimeout(() =>{
            p.innerHTML= 8;
            setTimeout(() =>{
                p.innerHTML= 7;
                setTimeout(() =>{
                    p.innerHTML= 6;
                    setTimeout(() =>{
                        p.innerHTML= 5;
                        setTimeout(() =>{
                            p.innerHTML= 4;
                            setTimeout(() =>{
                                p.innerHTML= 3;
                                setTimeout(() =>{
                                    p.innerHTML= 2;
                                    setTimeout(() =>{
                                        p.innerHTML= 1;
                                        setTimeout(() =>{
                                            p.innerHTML= 0;
                                            setTimeout(() =>{
                                                p.innerHTML= "HAPPY BIRTHDAY";
                                                            },0)
                                                        },1000)
                                                    },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000);
            


