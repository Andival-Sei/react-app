import React, { useActionState } from 'react';
import { Loader } from '../../components/Loader/index.jsx';
import cls from '../AddQuestionPage/AddQuestionPage.module.css';
import { QuestionForm } from '../../components/QuestionForm';
import { delayFn } from '../../helpers/delayFn.js';
import { API_URL } from '../../constants/index.js';
import { toast } from 'react-toastify';
import { dateFormat } from '../../helpers/dateFormat.js';

const editCardAction = async (_prevState, formData) => {
  try {
    await delayFn();

    const newQuestion = Object.fromEntries(formData);
    const resources = newQuestion.resources.trim();
    const questionId = newQuestion.questionId;
    const isClearForm = newQuestion.clearForm;

    const response = await fetch(`${API_URL}/react/${questionId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        question: newQuestion.question,
        answer: newQuestion.answer,
        description: newQuestion.description,
        resources: resources.length ? resources.split(',') : [],
        level: Number(newQuestion.level),
        completed: false,
        editDate: dateFormat(new Date()),
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const question = await response.json();
    toast.success('The question is edited successfully!');

    return isClearForm ? {} : question;
  } catch (error) {
    toast.error(error.message);
    return {};
  }
};

export const EditQuestion = ({ initialState = {} }) => {
  const [formState, formAction, isPending] = useActionState(editCardAction, { ...initialState, clearForm: false });

  return (
    <>
      {isPending && <Loader />}

      <h1 className={cls.formTitle}>Edit Question</h1>

      <div className={cls.formContainer}>
        <QuestionForm formAction={formAction} state={formState} isPending={isPending} submitBtnText="Edit Question" />
      </div>
    </>
  );
};
