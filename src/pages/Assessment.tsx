import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAssessmentStore } from '@/store/assessmentStore';

interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 'q1',
    category: 'Cervix',
    question: 'A cervical biopsy shows full-thickness nuclear atypia with block-positive p16 staining. What is the most likely diagnosis?',
    options: [
      'LSIL (CIN1)',
      'HSIL (CIN2-3)',
      'Immature squamous metaplasia',
      'Reactive changes'
    ],
    correctAnswer: 1,
    explanation: 'Block-positive p16 (diffuse strong nuclear and cytoplasmic staining) is characteristic of HSIL. It indicates high-risk HPV integration and helps distinguish HSIL from benign mimics like immature metaplasia.'
  },
  {
    id: 'q2',
    category: 'Endometrium',
    question: 'Which molecular group of endometrial carcinoma has the BEST prognosis?',
    options: [
      'p53 abnormal',
      'MMR deficient',
      'POLE ultramutated',
      'No specific molecular profile (NSMP)'
    ],
    correctAnswer: 2,
    explanation: 'POLE ultramutated endometrial carcinomas have excellent prognosis despite often showing high-grade morphology. The ultramutated phenotype paradoxically confers favorable outcome.'
  },
  {
    id: 'q3',
    category: 'Endometrium',
    question: 'An endometrial carcinoma shows complete loss of MLH1 and PMS2 by IHC. MSH2 and MSH6 are retained. What is the most likely cause?',
    options: [
      'Lynch syndrome with MLH1 germline mutation',
      'Lynch syndrome with MSH2 germline mutation',
      'Sporadic with MLH1 promoter hypermethylation',
      'POLE mutation'
    ],
    correctAnswer: 2,
    explanation: 'Loss of MLH1/PMS2 is most commonly sporadic due to MLH1 promoter hypermethylation (~70%). Lynch syndrome with MLH1 mutation is less common. MLH1 hypermethylation testing can distinguish sporadic from hereditary.'
  },
  {
    id: 'q4',
    category: 'Ovary',
    question: 'A high-grade ovarian carcinoma shows diffuse strong p53 nuclear staining in >90% of tumor cells. Which molecular alteration is most likely?',
    options: [
      'KRAS mutation',
      'TP53 mutation',
      'FOXL2 mutation',
      'BRCA1 mutation'
    ],
    correctAnswer: 1,
    explanation: 'Diffuse strong p53 staining (overexpression pattern) indicates a TP53 mutation, characteristic of high-grade serous carcinoma (~96%). This is a mutant p53 pattern (overexpression or null).'
  },
  {
    id: 'q5',
    category: 'Ovary',
    question: 'Which IHC marker combination best supports a diagnosis of granulosa cell tumor?',
    options: [
      'WT1+, PAX8+, p53 mutant',
      'Inhibin+, Calretinin+, SF-1+',
      'AFP+, SALL4+, OCT4+',
      'ER+, PR+, p53 wild-type'
    ],
    correctAnswer: 1,
    explanation: 'Inhibin, Calretinin, and SF-1 are characteristic markers of sex cord-stromal tumors, including granulosa cell tumor. Additionally, ~95% of adult granulosa cell tumors harbor FOXL2 C134W mutation.'
  },
  {
    id: 'q6',
    category: 'GTD',
    question: 'A products of conception specimen shows p57 negativity in villous stromal cells. What is the diagnosis?',
    options: [
      'Complete hydatidiform mole',
      'Partial hydatidiform mole',
      'Hydropic abortion',
      'Normal placenta'
    ],
    correctAnswer: 0,
    explanation: 'p57 is a maternally expressed imprinted gene. Complete mole (androgenetic, no maternal genome) shows p57 loss. Partial mole and hydropic abortion (biparental) show p57 positivity.'
  },
  {
    id: 'q7',
    category: 'GTD',
    question: 'Which trophoblastic tumor is characterized by strong hPL expression and weak hCG?',
    options: [
      'Choriocarcinoma',
      'Complete mole',
      'Placental site trophoblastic tumor (PSTT)',
      'Epithelioid trophoblastic tumor (ETT)'
    ],
    correctAnswer: 2,
    explanation: 'PSTT is composed of intermediate trophoblast and shows strong hPL (placental lactogen) with weak/focal hCG. Choriocarcinoma shows the opposite pattern (strong hCG, weak hPL).'
  },
  {
    id: 'q8',
    category: 'Placenta',
    question: 'A term placenta shows distal villous hypoplasia and accelerated villous maturation in the setting of maternal preeclampsia. What type of malperfusion is this?',
    options: [
      'Fetal vascular malperfusion (FVM)',
      'Maternal vascular malperfusion (MVM)',
      'Acute chorioamnionitis',
      'Villitis of unknown etiology (VUE)'
    ],
    correctAnswer: 1,
    explanation: 'Maternal vascular malperfusion (MVM) includes accelerated maturation, distal villous hypoplasia, and infarction. Associated with uteroplacental insufficiency, preeclampsia, and FGR.'
  },
  {
    id: 'q9',
    category: 'Ovary',
    question: 'Bilateral ovarian masses with signet ring cells are identified. CK7 is negative and CK20 is positive. What is the most likely diagnosis?',
    options: [
      'Primary ovarian mucinous carcinoma',
      'High-grade serous carcinoma',
      'Krukenberg tumor (metastatic from GI tract)',
      'Granulosa cell tumor'
    ],
    correctAnswer: 2,
    explanation: 'Krukenberg tumor is metastatic carcinoma (usually from stomach or colon) to ovary. Bilaterality, signet ring cells, and CK7-/CK20+ pattern support GI origin. PAX8 would be negative.'
  },
  {
    id: 'q10',
    category: 'Cervix',
    question: 'What is the key morphologic difference between LSIL and HSIL?',
    options: [
      'LSIL shows koilocytosis; HSIL does not',
      'LSIL has atypia in lower 1/3; HSIL shows full-thickness or >2/3 involvement',
      'LSIL is p16 positive; HSIL is p16 negative',
      'LSIL invades basement membrane; HSIL does not'
    ],
    correctAnswer: 1,
    explanation: 'LSIL shows cytopathic HPV effect with lower 1/3 basal atypia. HSIL shows loss of maturation with full-thickness or >2/3 involvement. Both are intraepithelial (no invasion). p16 is block-positive in HSIL.'
  },
  {
    id: 'q11',
    category: 'Endometrium',
    question: 'How do you distinguish endometrial polyp from EIN (endometrial intraepithelial neoplasia)?',
    options: [
      'Polyp has cytologic atypia; EIN does not',
      'Polyp has fibrous stroma and thick vessels; EIN has crowded glands with minimal stroma and atypia',
      'Polyp is >1mm; EIN is <1mm',
      'Polyp shows p53 mutation; EIN does not'
    ],
    correctAnswer: 1,
    explanation: 'Endometrial polyp is characterized by fibrous stroma and thick-walled blood vessels without cytologic atypia. EIN shows gland crowding (>50%), minimal stroma, cytologic atypia, and size >1mm.'
  },
  {
    id: 'q12',
    category: 'Placenta',
    question: 'Chronic lymphohistiocytic villitis in a patchy distribution without organisms is most consistent with:',
    options: [
      'CMV villitis',
      'Villitis of unknown etiology (VUE)',
      'Acute chorioamnionitis',
      'Syphilis'
    ],
    correctAnswer: 1,
    explanation: 'VUE is chronic lymphohistiocytic inflammation in terminal villi, patchy/focal distribution, without identified organisms. Thought to represent maternal anti-fetal rejection. Risk of recurrence in subsequent pregnancies.'
  }
];

const Assessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { currentScore, answeredQuestions, incrementCorrect, incrementTotal, resetScore } = useAssessmentStore();

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isQuizComplete = answeredQuestions === questions.length;

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === currentQuestion.correctAnswer) {
      incrementCorrect();
    } else {
      incrementTotal();
    }

    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    resetScore();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Assessment</h1>
          <p className="text-muted-foreground">Test your knowledge - session only, no score tracking</p>
        </div>
        {answeredQuestions > 0 && (
          <Button onClick={handleRestart} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Restart
          </Button>
        )}
      </div>

      <div className="bg-muted px-4 py-3 rounded-md">
        <div className="flex items-center justify-between text-sm">
          <span>Question {answeredQuestions + 1} of {questions.length}</span>
          <span>Current session: {currentScore} / {answeredQuestions} correct</span>
        </div>
      </div>

      {!isQuizComplete ? (
        <Card>
          <CardHeader>
            <div className="text-xs font-medium text-primary mb-2">{currentQuestion.category}</div>
            <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? showExplanation
                        ? index === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-red-500 bg-red-500/10'
                        : 'border-primary bg-primary/10'
                      : showExplanation && index === currentQuestion.correctAnswer
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-border hover:border-primary/50'
                  } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedAnswer === index ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
                    }`}>
                      {selectedAnswer === index && (
                        showExplanation ? (
                          index === currentQuestion.correctAnswer ? '✓' : '✗'
                        ) : (
                          String.fromCharCode(65 + index)
                        )
                      )}
                    </div>
                    <span className="text-sm flex-1">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Explanation</h4>
                <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4">
              {!showExplanation ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                >
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  {isLastQuestion ? 'Finish' : 'Next Question'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Assessment Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">
                {currentScore} / {questions.length}
              </div>
              <div className="text-xl text-muted-foreground">
                {Math.round((currentScore / questions.length) * 100)}% Correct
              </div>
              <div className="text-sm text-muted-foreground">
                You answered {currentScore} out of {questions.length} questions correctly in this session.
              </div>
            </div>

            <div className="border-t pt-6 space-y-3">
              <p className="text-sm font-medium">Session Summary</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-muted-foreground">Correct Answers</div>
                  <div className="text-2xl font-semibold text-green-600">{currentScore}</div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-muted-foreground">Incorrect Answers</div>
                  <div className="text-2xl font-semibold text-red-600">{questions.length - currentScore}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleRestart} className="flex-1">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Link to="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-xs text-muted-foreground text-center pt-4 border-t">
              Scores are session-only and not saved. This is for educational practice only.
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Assessment;
