player1name= localStorage.getItem("Player1Name")
player2name= localStorage.getItem("Player2Name")
player1score=0
player2score=0
document.getElementById("player1name").innerHTML=player1name
document.getElementById("player2name").innerHTML=player2name
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score
document.getElementById("playerquestion").innerHTML="questionturn="+player1name
document.getElementById("playeranswer").innerHTML="answerturn="+player2name