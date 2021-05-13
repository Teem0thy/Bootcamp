function answer() {
  let answers = [ 'Yes!', 'No!', 'Maybe.', 'Less likely.', 'Most Likely.' ]
  let ans = Math.floor(Math.random() * 5);
  console.log(ans)
  document.getElementById("ball-tex").innerHTML = answers[ans]
}