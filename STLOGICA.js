// GRUPO: JOÃO CALEGÁRIO, JOUBERT AZEVEDO, MARIA EDUARDA MENDES, PAULO HENRIQUE, THAMIRES DIAS
// BEM VINDO CENORA!
// ALTERE O SALARIO EM "VAR SALARIO" 
// DIGITES OS DEPENDENTES EM "VAR DEPENDENTES"
// DIGITE OS MESES TRABALHADOS EM "VAR MESESTRABALHADOS"


// NÃO = 0     SIM = 1
    
    var salario = 2968;
    var dependentes = 0
    var venderferias = 0
    var mesestrabalhados = 12

    let VALE = (salario * 0.06)
    console.log("Seu Vale transporte é: " + VALE);

    //INSS INSS INSS INSS INSS INSS INSS INSS INSS

    if ( salario <= 1100 ) { salario * 0.075
    console.log("Seu INSS é: " + salario * 0.075);}

    else if ( salario <= 2203.48 ) { (salario - 1100) * 0.09
    var resul= (salario - 1100) * 0.09 
    var porcent= 82.5
    console.log("Seu INSS é: " + (resul + porcent)); }

    else if ( salario <= 3305.22 ) { (salario - 2203.48) * 0.12
        var resul= (salario - 2203.48) * 0.12
        var porcent= 181.81
    console.log("Seu INSS é: " + (resul + porcent)); }

    else if ( salario <= 6433.57 ) { (salario - 3305.22) * 0.14
        var resul= (salario - 3305.22 ) * 0.14 
        var porcent= 314.01
        console.log("Seu INSS é: " + (resul + porcent )); }  

    else { salario >= 6433.58
        var resul= 0  
        var porcent= 751.99
        console.log("Seu INSS é: " + (resul + porcent)); }

// IRRF IRRF IRRF IRRF IRRF IRRF IRRF IRRF IRRF IRRF IRRF 

        var depen = 189.59
        var dep = (dependentes * depen)
        var INSS = ( resul + porcent);
        var frr = (salario - INSS - dep);
        

        if ( frr <= 1903.98)  { frr * 0 
            var rr= frr * 0;
            console.log("Seu IRRF é: " + IRRF);}

         else if ( frr <= 2826.65 ) { (frr * 0.075) - 142.80 
            var IRRF= (frr * 0.075) - 142.80
            console.log("Seu IRRF é: " + IRRF); }  

        else if ( frr <= 3751.05 ) { (frr * 0.15) - 354.80 
            var IRRF= (frr * 0.15) - 354.80
            console.log("Seu IRRF é: " + IRRF); }  

        else if ( frr <= 4664.68 ) { (frr * 0.225) - 636.13
                var IRRF= (frr * 0.225) - 636.13
                console.log("Seu IRRF é: " + IRRF); }  

        else if ( frr >= 4664.70 ) { (frr * 0.275) - 869.36 
                var IRRF= (frr * 0.275) - 869.36
                console.log("Seu IRRF é: " + IRRF); } 
                            
        else { frr <= 1
                var IRRF= (frr* 1)
                console.log("Seu IRRF é: " + IRRF ); }

// DESCONTOS // DESCONTOS
                                
                var desc= ( IRRF + INSS + VALE)                                   
                console.log("Valor dos Descontos: " + desc);
                                    
// SALARIO LIQUIDO

                var SAL= ( salario - desc)                                   
                console.log("Seu Salário Liquido é: " + SAL);

// 13° SALÁRIO

                var dec= ( salario / 12) * mesestrabalhados                                  
                console.log("Seu 13° é: " + dec);

// Férias

                var desc = (INSS - IRRF)
                var terc= (salario * 0.33333) 
                var sa12= ( salario / 12)
                

            if ( mesestrabalhados <= 11)  { (sa12 * mesestrabalhados)
                var ferias= (sa12 * mesestrabalhados)
                console.log("O Valor de suas Férias é: " + ferias);}
                                    

            else if ( mesestrabalhados = 12 ) { salario + terc 
                var ferias= (salario + terc)
                console.log("O Valor de suas Férias é: " + ferias); }

            else { mesestrabalhados <= 0.15
                    var ferias= 0
                    console.log("Você não tem direito a Férias " + ferias ); }
// venda férias
                    
            if ( venderferias >=1 ) { ((ferias / 30) * mesestrabalhados )
                    var ven= ((ferias/ 30) * mesestrabalhados )
                    var ven2= (ven + ferias)
                    var ferias= (ven2 )
                    console.log("O Valor da venda de suas Férias é: " + ferias); }

                    else { 
                        console.log("Você não tem direito a venda de Férias "); }

// (13+FÉRIAS)                   
                    var f13= ( dec + ferias)                                
                    console.log("Seu 13° + Férias é: " + f13);
 // IFFR(13-FÉRIAS)                   
                    var IRRF2= ( IRRF * 2.33333)                                
                    console.log("IFFR(13-Férias)= " + IRRF2);
                        

                                    


                        
                                    

                                        

     
                
            
        


        

        




