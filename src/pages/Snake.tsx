import { useRef, useState, useEffect} from "react";
import "../style/SnakeStyle.css"
import useInterval from "../useInterval"



const Snake = () => {
 
  const canvasX = 1000;
  const canvasY = 1000;
  const initialSnake = [[1,10],[4,10]];
  const initialFood = [14,10];
  const scale = 50;
  const timeDelay = 100;

  const CanvasRef = useRef<HTMLCanvasElement | null>(null)
  const [snake, setSnake] = useState(initialSnake)
  const [food, setFood] = useState(initialFood)
  const [direction, setDirection] = useState([0,-1])
  const [delay, setDelay] = useState<number | null>(null)
  const [gameover, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  useInterval(() => runGame(), delay)

  useEffect(
		() => {
			let fruit = document.getElementById("fruit") as HTMLCanvasElement
			if (CanvasRef.current) {
				const canvas = CanvasRef.current
				const ctx = canvas.getContext("2d")
				if (ctx) {
					ctx.setTransform(scale, 0, 0, scale, 0, 0)
					ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
					ctx.fillStyle = "#a3d001"
					snake.forEach(([ x, y ]) => ctx.fillRect(x, y, 1, 1))
					ctx.drawImage(fruit, food[0], food[1], 1, 1)
				}
			}
		},
		[ snake, food, gameover ]
	)

	function handleSetScore() {
		if (score > Number(localStorage.getItem("snakeScore"))) {
			localStorage.setItem("snakeScore", JSON.stringify(score))
		}
	}

	function play() {
		setSnake(initialSnake)
		setFood(initialFood)
		setDirection([ 1, 0 ])
		setDelay(timeDelay)
		setScore(0)
		setGameOver(false)
	}

	function checkCollision(head: number[]) {
		for (let i = 0; i < head.length; i++) {
			if (head[i] < 0 || head[i] * scale >= canvasX) return true
		}
		for (const s of snake) {
			if (head[0] === s[0] && head[1] === s[1]) return true
		}
		return false
	}

	function appleAte(newSnake: number[][]) {
		let coord = food.map(() => Math.floor(Math.random() * canvasX / scale))
		if (newSnake[0][0] === food[0] && newSnake[0][1] === food[1]) {
			let newApple = coord
			setScore(score + 1)
			setFood(newApple)
			return true
		}
		return false
	}

	function runGame() {
		const newSnake = [ ...snake ]
		const newSnakeHead = [ newSnake[0][0] + direction[0], newSnake[0][1] + direction[1] ]
		newSnake.unshift(newSnakeHead)
		if (checkCollision(newSnakeHead)) {
			setDelay(null)
			setGameOver(true)
			handleSetScore()
		}
		if (!appleAte(newSnake)) {
			newSnake.pop()
		}
		setSnake(newSnake)
	}

	function changeDirection(e: React.KeyboardEvent<HTMLDivElement>) {
		switch (e.key) {
			case "ArrowLeft":
				setDirection([ -1, 0 ])
				break
			case "ArrowUp":
				setDirection([ 0, -1 ])
				break
			case "ArrowRight":
				setDirection([ 1, 0 ])
				break
			case "ArrowDown":
				setDirection([ 0, 1 ])
				break
		}
	}

  return (
    <>
	<h1 className="textCenter">Movimiento con las flechas</h1>
    <div onKeyDown={(e)=> changeDirection(e)}>
    <img id="fruit" src="./public/apple.png" alt="fruit" width="30"/>
    <img src="./public/CuadroDeJuego.png" alt="fruit" width="4000" className="monitor" />
    <canvas className="playArea" ref={CanvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
      {gameover && <div className="gameOver">Game Over</div> }
      <button onClick={play} className="playButton">Play</button>
      <div className="scoreBox">
        <h2>Score: {score}</h2>
        <h2>Score: {localStorage.getItem("snakeScore")}</h2>
      </div>
    </div>
   
    </>
  )
}

export default Snake