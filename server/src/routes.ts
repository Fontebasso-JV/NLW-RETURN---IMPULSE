import express from 'express'
import { prisma } from './prisma';
import nodemailer from 'nodemailer'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/pisma-feedbacks-repository';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "267a030362f2af",
      pass: "57ab170388dc40"
    }
  });

routes.post('/feedbacks', async (req, res) => {
    const {type,comment,screenshot} = req.body

    const PrismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        PrismaFeedbacksRepository
    )
 
 //    await transport.sendMail({
 //        from: 'Equipe Feedget <oi@feedget.com>',
 //        to: 'Joao Fontebasso <joao.alvescont@gmail.com>',
 //        subject: 'Novo Feedback',
 //        html: [
  //           `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
 //            `<p>Tipo do feedback: ${type}</p>`,
 //            `<p>Comentário: ${comment} </p>`,
 //            `</div>`
 //        ].join('\n')
 
 //    })
 
     return res.status(201).json({data: feedbacks})
     
 })