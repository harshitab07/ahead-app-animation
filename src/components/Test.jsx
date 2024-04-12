import React, { useState } from "react";
import { motion } from "framer-motion";
// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

const Questions = [
  "What's your name?", "What's your role?", "What's your favorite tech-stack?"
]
const Test = () => {

  const TestPopup = () => {
    const [open, setOpen] = React.useState(false);
    const [quesCount, setQuesCount] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [answerField, setAnswerField] = useState('');
    const navigate = useNavigate();
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const addAnswer = (e) => {
      if (e.target.value !== "") setAnswers([...answers, e.target.value]);
    }

    const handleNext = () => {
      setAnswerField('');
      if(quesCount + 1 < Questions.length) {
        setQuesCount(quesCount + 1);
      } else {
        handleClose();
        setQuesCount(0);
        // save answers
        let id = new Date();
        id = id.getTime();

        let results = localStorage.getItem('results');
        if(results) {
          results = JSON.parse(results);
          localStorage.setItem('results', JSON.stringify([...results, {answers, id}]));
        } else {
          localStorage.setItem('results', JSON.stringify([{answers, id}]));
        }
        navigate(`/results/${id}`);
      }

    }
  
    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Start Test
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Start Test</DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
            {Questions[quesCount]}
            <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Answer"
            type="text"
            value={answerField}
            fullWidth
            variant="standard"
            onChange={(e) => setAnswerField(e.target.value)}
            onBlur={addAnswer}
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleNext}>Next</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }

  return (
    <section className="mt-20 flex flex-col gap-3 text-center p-8">
      <p className="text-center">We take privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-xl font-normal">
      &quot;We would not share your answers with anyone.
        <br /> (and would not ever tell you which friends said what about you)&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="">with love, </p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: "10%" },
          visible: {
            y: 0,
            transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
          },
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: {
              opacity: 1,
              scale: [0,0.25,0.5,0.8,1.01,1],
              transition: { ease: "easeInOut", duration: 1 },
            },
          }}
          style={{
            width: "100%", // Adjust the width as needed
            overflow: "hidden", // Hide overflowing text while sliding
          }}
          className="pt-3"
        >
          <TestPopup />
        </motion.div>
        <div className="text-sm mt-4">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default Test;
