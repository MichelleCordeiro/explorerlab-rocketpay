// REGRA DO CARTÕES

// VISA
// inicia c 4 seguido de 15 dígitos
4123456789012345

// MASTER
//      "("
// inicia c 5, seguido de um dígitos entre 1 e 5, seguido de mais 2 dígitos
// ou
// inicia c 22, seguido de um dígitos entre 2 e 9, seguido de mais 1 dígito
// ou
// inicia c 2, seguido de um dígitos entre 3 e 7, seguido de mais 2 dígitos,
//       ")"
// seguido de mais 12 dígitos

5353535353535353
2323232323232323
2223232323232323

// (^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}

// PODERIA SER DITO DA SEGUINTE FORMA: assim ele não precisaria
//    esperar ter o total de dígitos para já identificar a bandeira
// inicia c 5, seguido de um dígitos entre 1 e 5,
//    seguido de *ZERO OU* mais 2 dígitos
