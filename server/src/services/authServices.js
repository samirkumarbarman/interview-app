import { Candidate } from '../models/candidateModel.js';
import { Interviewer } from '../models/interviewerModel.js';
import { generateToken, verifyToken } from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';

//Register new candidate
export const registerCandidate = async ({
    firstName,
    lastName,
    email,
    phone,
    password
}) => {
   const existCandidate = await Candidate.findOne({email});
   if (existCandidate) {
       throw new Error('Candidate already exists');
   }
   const newCandidate = new Candidate({
       firstName,
       lastName,
       email,
       phone,
       password
   });
   await newCandidate.save();
   return newCandidate;
};

//Register new interviewer
export const registerInterviewer = async ({
    firstName,
    lastName,
    email,
    phone,
    password
}) => {
   const existInterviewer = await Interviewer.findOne({email});
   if (existInterviewer) {
       throw new Error('Interviewer already exists');
   }
    const newInterviewer = new Interviewer({
         firstName,
         lastName,
         email,
         phone,
         password
    });
    return newInterviewer;
}

//Login candidate
export const loginCandidate = async ({email, password}) => {
    const candidate = await Candidate.findOne({email});
    if (!candidate) throw new Error('Invalid credentials');
    const isMatch = await bcrypt.compare(password, candidate.password);
    if (!isMatch) throw new Error('Invalid credentials');
    return generateToken(candidate._id);
};

//verfiy token
export const verifyCandidate = (token) => {
    return verifyToken(token);
};

//Login interviewer
export const loginInterviewer = async ({email, password}) => {
    const interviewer = await Interviewer.findOne({email});
    if (!interviewer) throw new Error('Invalid credentials');
    const isMatch = await bcrypt.compare(password, interviewer.password);
    if (!isMatch) throw new Error('Invalid credentials');
    return generateToken(interviewer._id);
};

//verify token
export const verifyInterviewer = (token) => {
    return verifyToken(token);
};
    