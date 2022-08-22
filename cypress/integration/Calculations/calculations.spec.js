describe('Easy calculations in simple expression mode', () => {
  afterEach(() => {
    cy.clearCalculationResult()
    cy.checkCalculationResult('0')
  })

  it('visits the app', () => {
    cy.visit('/')
    cy.clickCalcTypeSwitch()
  })

  it('Test simple addition', () => {
    cy.enterBasicKeypadExpression('2+2=')
    cy.checkCalculationResult('4')
  })

  it('Test simple subtraction', () => {
    cy.enterBasicKeypadExpression('2-2=')
    cy.checkCalculationResult('0')
  })

  it('Test simple multiplication', () => {
    cy.enterBasicKeypadExpression('2*3=')
    cy.checkCalculationResult('6')
  })

  it('Test simple division', () => {
    cy.enterBasicKeypadExpression('1/2=')
    cy.checkCalculationResult('0.5')
  })

  it('Test simple modulus', () => {
    cy.enterAdvancedKeypadExpression('8%3=')
    cy.checkCalculationResult('2')
  })

  it('Test division by zero', () => {
    cy.enterBasicKeypadExpression('1/0=')
    cy.checkCalculationResult('Error: Division by zero')
  })
})

describe('Easy calculations in complex expression mode', () => {
  afterEach(() => {
    cy.clearCalculationResult()
    cy.checkCalculationResult('0')
  })

  it('visits the app', () => {
    cy.visit('/')
    cy.clickCalcTypeSwitch()
  })

  it('change expression mode to complex', () => {
    cy.get('label')
      .eq(1)
      .click()
  })

  it('Mixed base test 1', () => {
    cy.enterBasicKeypadExpression('49*63/58*36=')
    cy.checkCalculationResult('1916.069')
  })

  it('Mixed base test 2', () => {
    cy.enterBasicKeypadExpression('84+62/33*10+15=')
    cy.checkCalculationResult('117.788')
  })

  it('Mixed base test 3', () => {
    cy.enterBasicKeypadExpression('48+59*86*92*23=')
    cy.checkCalculationResult('10736632')
  })

  it('Mixed base test 4', () => {
    cy.enterBasicKeypadExpression('16+25-92+54/66=')
    cy.checkCalculationResult('-50.182')
  })

  it('Mixed base test 5', () => {
    cy.enterBasicKeypadExpression('64+19-77-93=')
    cy.checkCalculationResult('-87')
  })

  it('Mixed base test 6', () => {
    cy.enterBasicKeypadExpression('88-72+55*57=')
    cy.checkCalculationResult('3151')
  })

  it('Mixed base test 7', () => {
    cy.enterBasicKeypadExpression('99*55/30+50=')
    cy.checkCalculationResult('231.5')
  })

  it('Mixed base test 8', () => {
    cy.enterBasicKeypadExpression('11-88+84-48=')
    cy.checkCalculationResult('-41')
  })

  it('Mixed base test 9', () => {
    cy.enterBasicKeypadExpression('68*60/87/53+17=')
    cy.checkCalculationResult('17.885')
  })

  it('Mixed base test 10', () => {
    cy.enterBasicKeypadExpression('63-69-46+57=')
    cy.checkCalculationResult('5')
  })

  it('Mixed base test 11', () => {
    cy.enterBasicKeypadExpression('60+29/57-85=')
    cy.checkCalculationResult('-24.491')
  })

  it('Mixed base test 12', () => {
    cy.enterBasicKeypadExpression('34*18*55-50=')
    cy.checkCalculationResult('33610')
  })

  it('Mixed base test 13', () => {
    cy.enterBasicKeypadExpression('12*3-18+34-84=')
    cy.checkCalculationResult('-32')
  })

  it('Mixed base test 14', () => {
    cy.enterBasicKeypadExpression('70/42-52-64/35=')
    cy.checkCalculationResult('-52.162')
  })

  it('Mixed base test 15', () => {
    cy.enterAdvancedKeypadExpression('39/41+100+45=')
    cy.checkCalculationResult('145.951')
  })

  it('Mixed base test 16', () => {
    cy.enterAdvancedKeypadExpression('39/41+100%45=')
    cy.checkCalculationResult('10.951')
  })

  it('Mixed base test 17', () => {
    cy.enterAdvancedKeypadExpression('67%25*7%8=')
    cy.checkCalculationResult('7')
  })

  it('Mixed base test 18', () => {
    cy.enterAdvancedKeypadExpression('12%3-18+34-8=')
    cy.checkCalculationResult('8')
  })
})

describe('Medium calculations in complex expression mode', () => {
  afterEach(() => {
    cy.clearCalculationResult()
    cy.checkCalculationResult('0')
  })

  it('visits the app', () => {
    cy.visit('/')
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
  })

  it('Brackets must be paired 1', () => {
    cy.enterBasicKeypadExpression('((1+2)*3=')
    cy.checkCalculationResult('Error: Incorrect brackets')
  })

  it('Brackets must be paired 2', () => {
    cy.enterBasicKeypadExpression('((1+2*3=')
    cy.checkCalculationResult('Error: Incorrect brackets')
  })

  it('Brackets test 1', () => {
    cy.enterBasicKeypadExpression('20-57*12-(58+84*32/27)=')
    cy.checkCalculationResult('-821.556')
  })

  it('Brackets test 2', () => {
    cy.enterBasicKeypadExpression(
      '77+79/25*(64*63-89*14)*49=',
    )
    cy.checkCalculationResult('431461.24')
  })

  it('Brackets test 3', () => {
    cy.enterBasicKeypadExpression(
      '100-60/38+(19/88*97/82/94)*92=',
    )
    cy.checkCalculationResult('98.671')
  })

  it('Brackets test 4', () => {
    cy.enterBasicKeypadExpression('(97/48+86+56*94)/43+57=')
    cy.checkCalculationResult('181.466')
  })

  it('Brackets test 5', () => {
    cy.enterBasicKeypadExpression('(68-85/75*64)/15+73=')
    cy.checkCalculationResult('72.698')
  })

  it('Brackets test 6', () => {
    cy.enterBasicKeypadExpression('91+18/(42+62+84*95)+30=')
    cy.checkCalculationResult('121.002')
  })

  it('Brackets test 7', () => {
    cy.enterBasicKeypadExpression(
      '49*31*(20-83/63/46*29)/68=',
    )
    cy.checkCalculationResult('428.211')
  })

  it('Brackets test 8', () => {
    cy.enterBasicKeypadExpression(
      '35-45/37+84+(41+86/18/41*73)=',
    )
    cy.checkCalculationResult('167.291')
  })

  it('Brackets test 9', () => {
    cy.enterBasicKeypadExpression(
      '44*13/(26+24*70+89*7)+81=',
    )
    cy.checkCalculationResult('81.246')
  })

  it('Brackets test 10', () => {
    cy.enterBasicKeypadExpression(
      '53-88+7+(34/54+15/23/6)*73=',
    )
    cy.checkCalculationResult('25.898')
  })

  it('Brackets test 11', () => {
    cy.enterBasicKeypadExpression(
      '57-71+(14+3-24*100/23)/53=',
    )
    cy.checkCalculationResult('-15.648')
  })

  it('Brackets test 12', () => {
    cy.enterBasicKeypadExpression('(41*76*79-61)/60+83=')
    cy.checkCalculationResult('4184.717')
  })

  it('Brackets test 13', () => {
    cy.enterBasicKeypadExpression('(73+85+64/17)*17+31/60=')
    cy.checkCalculationResult('2750.517')
  })

  it('Brackets test 14', () => {
    cy.enterBasicKeypadExpression(
      '74*96+62/(25/33+96+87+78)=',
    )
    cy.checkCalculationResult('7104.237')
  })

  it('Brackets test 15', () => {
    cy.enterBasicKeypadExpression('33-96+(95-76*98/11)*15=')
    cy.checkCalculationResult('-8794.364')
  })

  it('Brackets test 16', () => {
    cy.enterBasicKeypadExpression(
      '72/75+4*(14*2/57*21)/15=',
    )
    cy.checkCalculationResult('3.711')
  })

  it('Brackets test 17', () => {
    cy.enterBasicKeypadExpression(
      '72*95+53+(2+76-52/1-47)=',
    )
    cy.checkCalculationResult('6872')
  })

  it('Brackets test 18', () => {
    cy.enterBasicKeypadExpression('85*97/(89/11-18*96)-61=')
    cy.checkCalculationResult('-65.794')
  })

  it('Brackets test 19', () => {
    cy.enterBasicKeypadExpression(
      '29+24/91-(14*71*18/20*100)+63=',
    )
    cy.checkCalculationResult('-89367.736')
  })

  it('Brackets test 20', () => {
    cy.enterBasicKeypadExpression('52*62*(61+12-14*79)+39=')
    cy.checkCalculationResult('-3330353')
  })

  it('Brackets test 21', () => {
    cy.enterAdvancedKeypadExpression(
      '52%62*(61+12-14*79)%39=',
    )
    cy.checkCalculationResult('-13')
  })

  it('Brackets test 22', () => {
    cy.enterAdvancedKeypadExpression(
      '(56-34)%(23-34*(18+5))=',
    )
    cy.checkCalculationResult('22')
  })

  it('Brackets test 23', () => {
    cy.enterAdvancedKeypadExpression(
      '(45%0.5)+(17-90/(1111%17))=',
    )
    cy.checkCalculationResult('2')
  })
})

describe('Hard calculations in complex expression mode', () => {
  afterEach(() => {
    cy.clearCalculationResult()
    cy.checkCalculationResult('0')
  })

  it('visits the app', () => {
    cy.visit('/')
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
  })

  it('Nested brackets test 1', () => {
    cy.enterBasicKeypadExpression(
      '(38+52+65-19)*(72*3/36*(9/2-17*38/28))/18/84=',
    )
    cy.checkCalculationResult('-10.023')
  })

  it('Nested brackets test 2', () => {
    cy.enterBasicKeypadExpression(
      '93*30/81*(78*83/(71*13-(14+13-28*62)*62)+99-(80-89+17*42))=',
    )
    cy.checkCalculationResult('-20871.247')
  })

  it('Nested brackets test 3', () => {
    cy.enterBasicKeypadExpression(
      '58*85*(1+16*7+(82*31*(85/75-51-22)+2-24))*22*(27+67+0+93)=',
    )
    cy.checkCalculationResult('-3703376512014.667')
  })

  it('Nested brackets test 4', () => {
    cy.enterBasicKeypadExpression(
      '99-78*(((63+52/67+26/29)+94+(68-11/1*88)+49)/69*15*8)-1=',
    )
    cy.checkCalculationResult('94013.707')
  })

  it('Nested brackets test 5', () => {
    cy.enterBasicKeypadExpression(
      '(56/33+87+((12/48-44-51)+85*(69-35-67-82+81)-40))-86-85=',
    )
    cy.checkCalculationResult('-3107.053')
  })

  it('Nested brackets test 6', () => {
    cy.enterBasicKeypadExpression(
      '(80/12/47-93)+78/(20/23+(54+36/29+23)-61)=',
    )
    cy.checkCalculationResult('-88.551')
  })

  it('Nested brackets test 7', () => {
    cy.enterBasicKeypadExpression(
      '((91/57/30-72)-(53*22/23/6)*79-27)-19/30=',
    )
    cy.checkCalculationResult('-767.073')
  })

  it('Nested brackets test 8', () => {
    cy.enterBasicKeypadExpression(
      '(36+78+(43/89-57/(64+98/57-24-47))*56)-((29-9/76*99-29)*98/11)*31=',
    )
    cy.checkCalculationResult('3983.39')
  })

  it('Nested brackets test 9', () => {
    cy.enterBasicKeypadExpression(
      '6+78+(55/20-92/55/((94+40+56/61)/38/97+(32/36/25*(12/30-22*(51/87*71/50/(98-37-90-91)))*57)))/42/25=',
    )
    cy.checkCalculationResult('84.001')
  })

  it('Nested brackets test 10', () => {
    cy.enterBasicKeypadExpression(
      '((60-42-16/100)*(29*88+51+77)-49-59)-89*45=',
    )
    cy.checkCalculationResult('43698.2')
  })

  it('Nested brackets test 11', () => {
    cy.enterBasicKeypadExpression(
      '11-92+48/((12/92+(53/74/22+(61/24/42-(13*85+100/77/11)+89)+9)+87)/91*92)=',
    )
    cy.checkCalculationResult('-81.052')
  })

  it('Nested brackets test 12', () => {
    cy.enterBasicKeypadExpression(
      '66-83+((41*98*10*(40/64+46*33))/(61+91-73*9+12)/(88*29/96-41-72))*(81*40/95+61)+5=',
    )
    cy.checkCalculationResult('136201.64')
  })

  it('Nested brackets test 13', () => {
    cy.enterBasicKeypadExpression(
      '(93*79/(24+83/(11*45/21*((75-15-(60+94/(70-27-89+71)-81)*27-73)*92-59-57)+13)*84*49)/22)*27/62+76=',
    )
    cy.checkCalculationResult('81.973')
  })

  it('Nested brackets test 14', () => {
    cy.enterBasicKeypadExpression(
      '((18-15+90+68/71)-94+(51/67+12/39+15)-28)+14/97=',
    )
    cy.checkCalculationResult('-11.829')
  })

  it('Nested brackets test 15', () => {
    cy.enterBasicKeypadExpression(
      '29+67-22*(((98+90*90+81-83)*92-79+37)*20-60)=',
    )
    cy.checkCalculationResult('-331754184')
  })

  it('Nested brackets test 16', () => {
    cy.enterBasicKeypadExpression(
      '92-34+32*(((89-87/11/66)/49+2/76)/93/45)*92=',
    )
    cy.checkCalculationResult('59.295')
  })

  it('Nested brackets test 17', () => {
    cy.enterBasicKeypadExpression(
      '(81+60/54/21)+(77-31+(41+69-62-96)*0)-0-62=',
    )
    cy.checkCalculationResult('65.053')
  })

  it('Nested brackets test 18', () => {
    cy.enterBasicKeypadExpression(
      '20*60+9-(89*95*3*(44-51-11-(62+69-22+21)*9)/50)-(94-70/29/7)=',
    )
    cy.checkCalculationResult('603787.745')
  })

  it('Nested brackets test 19', () => {
    cy.enterBasicKeypadExpression(
      '94/49+36/(39+1-(18*47/20*(66-51/19/19+(22*80/4/74-59))*12)/69)=',
    )
    cy.checkCalculationResult('1.254')
  })

  it('Nested brackets test 20', () => {
    cy.enterBasicKeypadExpression(
      '24-23*17/(93+52*70*(6+91/((4/39/8*30)/(22*97*(32*20*(82-80*51/89*9)*56+82)*89)-17-17)/29/81))=',
    )
    cy.checkCalculationResult('23.982')
  })

  it('Nested brackets test 21', () => {
    cy.enterBasicKeypadExpression(
      '3*26/((75/18*91*38)/53-(52/34-(10*67-50-78)*51+58))+73=',
    )
    cy.checkCalculationResult('73.003')
  })

  it('Nested brackets test 22', () => {
    cy.enterBasicKeypadExpression(
      '(91/56+53*93)+(12*36+55+54/(56+43+45+61-45))/(94-23-66*(71+65/95/27/1)-17)=',
    )
    cy.checkCalculationResult('4930.52')
  })

  it('Nested brackets test 23', () => {
    cy.enterBasicKeypadExpression(
      '75*97*3-((59-3/88+(93*100*65-38+54))/63-85)=',
    )
    cy.checkCalculationResult('12313.572')
  })

  it('Nested brackets test 24', () => {
    cy.enterBasicKeypadExpression(
      '(94/78/20/62)+78-((40+46/7*35)/42+41*26)=',
    )
    cy.checkCalculationResult('-994.428')
  })

  it('Nested brackets test 25', () => {
    cy.enterBasicKeypadExpression(
      '(6+28+18-((61+17*64*98)*(61/53*47/36*98)+82+(69-55/(62*77/88-52/10)-42-(48/84*77+40-13))))-4/99=',
    )
    cy.checkCalculationResult('-15710078.059')
  })

  it('Nested brackets test 26', () => {
    cy.enterBasicKeypadExpression(
      '96*67-10+(40-42-25/(96/23*54*(18*30/85/79-90)))=',
    )
    cy.checkCalculationResult('6420.001')
  })

  it('Nested brackets test 27', () => {
    cy.enterBasicKeypadExpression(
      '93-42/(80*45+46+(66*45-26*0*84))-((20-59-18-62)/(9/90*16-6)*3)=',
    )
    cy.checkCalculationResult('11.857')
  })

  it('Nested brackets test 28', () => {
    cy.enterBasicKeypadExpression(
      '31*21+14/((18*52/(43-74/89-12)+8)+3/0+(9+81+19*94/(0*71+53-20*94)))=',
    )
    cy.checkCalculationResult('Error: Division by zero')
  })

  it('Nested brackets test 29', () => {
    cy.enterBasicKeypadExpression(
      '(96/83-53-(59-91/91-54))/(75+4/(50-80*45+93+18)-76/54)*14+59=',
    )
    cy.checkCalculationResult('48.376')
  })

  it('Nested brackets test 30', () => {
    cy.enterBasicKeypadExpression(
      '59-13+(25*22/(47/38*(64/93-91+72)*66)+43-5)*39/55=',
    )
    cy.checkCalculationResult('72.685')
  })

  it('Nested brackets test 31', () => {
    cy.enterAdvancedKeypadExpression(
      '59-13+(25%22/(47/38*(64/93-91+72)%66)+43-5)*39/55=',
    )
    cy.checkCalculationResult('72.852')
  })

  it('Nested brackets test 32', () => {
    cy.enterAdvancedKeypadExpression(
      '93-42/(80%45+46+(66*45-26*0*84))-((20-59%18-62)/(9/90*16-6)*3)=',
    )
    cy.checkCalculationResult('60.941')
  })
})
