import React, { useState } from 'react';
import { Chess } from 'chess.js';

import Header from '../components/Header';
import FlowFooter from '../components/FlowFooter';

import whiteKing from "../../icons/chess/white king.png";
import blackKing from "../../icons/chess/black king.png";
import whiteQueen from "../../icons/chess/white queen.png";
import blackQueen from "../../icons/chess/black queen.png";
import whitePawn from "../../icons/chess/white pawn.png";
import blackPawn from "../../icons/chess/black pawn.png";
import whiteHorse from "../../icons/chess/white horse.png";
import blackHorse from "../../icons/chess/black horse.png";
import whiteRook from "../../icons/chess/white rook.png";
import blackRook from "../../icons/chess/black rook.png";
import whiteBishop from "../../icons/chess/white bishop.png";
import blackBishop from "../../icons/chess/black bishop.png";

function ChessGame() {
  const [game, setGame] = useState(new Chess()); // Initialize Chess.js game
  const [board, setBoard] = useState(game.board()); // Current board state
  const [selectedSquare, setSelectedSquare] = useState(null); // Selected square
  const [turn, setTurn] = useState('Player 1'); // Track turn
  const [playerCapturedPieces, setPlayerCapturedPieces] = useState([]); // Player 1 captured pieces
  const [aiCapturedPieces, setAiCapturedPieces] = useState([]); // AI captured pieces

  // Handle square click
  const handleSquareClick = (row, col) => {
    const square = `${String.fromCharCode(97 + col)}${8 - row}`; // Convert to algebraic notation

    if (selectedSquare) {
      // Attempt to make a move from the selected piece to the new square
      const move = game.move({ from: selectedSquare, to: square });

      if (move) {
        if (move.captured) {
          // Add captured piece to Player 1's list with color
          setPlayerCapturedPieces([...playerCapturedPieces, { type: move.captured, color: move.color === 'w' ? 'b' : 'w' }]);
        }
        updateBoard();
        setSelectedSquare(null); // Deselect the piece after moving
        setTurn('AI'); // Change turn to AI
        setTimeout(handleAIMove, 500); // AI makes a move after 500ms
      } else {
        // If the move is not valid, just deselect the piece
        setSelectedSquare(null);
      }
    } else {
      // Select the piece for the first time
      const piece = game.get(square);
      if (piece && piece.color === 'w') { // Ensure the player is selecting their own piece
        setSelectedSquare(square); // Select new square
      }
    }
  };

  // AI logic: Select a random valid move
  const handleAIMove = () => {
    const moves = game.moves({ verbose: true }); // Get all valid moves with details
    if (moves.length > 0) {
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      if (randomMove.captured) {
        // Add captured piece to AI's list with color
        setAiCapturedPieces([...aiCapturedPieces, { type: randomMove.captured, color: randomMove.color === 'w' ? 'b' : 'w' }]);
      }
      game.move(randomMove.san);
      updateBoard();
      setTurn('Player 1');
    }
  };

  // Update board state
  const updateBoard = () => {
    setBoard(game.board());
  };

  // Map chess piece types to images
  const pieceImages = {
    k: blackKing,
    K: whiteKing,
    q: blackQueen,
    Q: whiteQueen,
    p: blackPawn,
    P: whitePawn,
    n: blackHorse,
    N: whiteHorse,
    r: blackRook,
    R: whiteRook,
    b: blackBishop,
    B: whiteBishop,
  };

  // Render the board
  return (
    <div className="wrapper">
      <div>
        <Header />
      </div>
      <main>
        <h1 className='text-center pt-3 text-[20px] font-semibold'>Easy Chess</h1>
        <p className='text-center'>Sure win naka ani shin</p>
        <p className='text-center text-[12px]'>If you win shin you have a price</p>
        <h2 className='ml-[10px] text-[11px] font-medium'>Turn: {turn}</h2>
        <div className="captured-pieces ai">
          <h3 className='text-center'>AI Captured:</h3>
          <div className="captured-list">
            {aiCapturedPieces.map((piece, index) => (
              <img
                key={`ai-${index}`}
                src={pieceImages[piece.color === 'w' ? piece.type.toUpperCase() : piece.type]}
                alt={piece.type}
                className="captured-piece"
              />
            ))}
          </div>
        </div>
        <div className="chessboard">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => {
                const square = `${String.fromCharCode(97 + colIndex)}${8 - rowIndex}`;
                return (
                  <div
                    key={colIndex}
                    className={`cell ${(rowIndex + colIndex) % 2 === 0 ? 'light' : 'dark'} ${
                      selectedSquare === square ? 'selected' : ''
                    }`}
                    onClick={() => (turn === 'Player 1' ? handleSquareClick(rowIndex, colIndex) : null)}
                  >
                    {cell?.type && (
                      <img
                        src={pieceImages[cell.color === 'w' ? cell.type.toUpperCase() : cell.type]}
                        alt={cell.type}
                        className="chess-piece"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="captured-pieces player">
          <h3 className='text-center'>Shin Captured:</h3>
          <div className="captured-list">
            {playerCapturedPieces.map((piece, index) => (
              <img
                key={`player-${index}`}
                src={pieceImages[piece.color === 'w' ? piece.type.toUpperCase() : piece.type]}
                alt={piece.type}
                className="captured-piece"
              />
            ))}
          </div>
        </div>
      </main>
      <div className='absolute w-[100%] bottom-0'>
        <FlowFooter className="FlowFooter" />
      </div>
    </div>
  );
}

export default ChessGame;
