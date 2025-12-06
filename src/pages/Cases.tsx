import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseData {
  id: string;
  title: string;
  category: string;
  clinical: string;
  gross: string;
  micro: string;
  ihc?: string;
  molecular?: string;
  diagnosis: string;
  discussion: string;
}

const cases: CaseData[] = [
  {
    id: 'case-001',
    title: 'Cervical Biopsy with Atypical Squamous Proliferation',
    category: 'Cervix',
    clinical: '32-year-old woman with abnormal Pap test showing ASCUS. HPV 16 positive. Colposcopy showed acetowhite lesion at 6 o\'clock position.',
    gross: 'Multiple tan-pink tissue fragments, 0.5 cm aggregate.',
    micro: 'Squamous epithelium showing full-thickness loss of maturation. Nuclei are enlarged, hyperchromatic with irregular contours. High nuclear-to-cytoplasmic ratio. Mitotic figures present in upper layers. No invasion identified.',
    ihc: 'p16: Block-positive (diffuse strong nuclear and cytoplasmic). Ki-67: Positive in middle and upper epithelial layers.',
    diagnosis: 'High-grade squamous intraepithelial lesion (HSIL / CIN3)',
    discussion: 'This case demonstrates classic HSIL features with block-positive p16, confirming high-risk HPV integration. Full-thickness atypia without invasion defines this as CIN3. The p16 pattern helps distinguish from immature squamous metaplasia.'
  },
  {
    id: 'case-002',
    title: 'Endometrial Curettage with Glandular Crowding',
    category: 'Endometrium',
    clinical: '58-year-old postmenopausal woman with abnormal uterine bleeding. Endometrial thickness 15mm on ultrasound.',
    gross: 'Scant tan-pink tissue fragments.',
    micro: 'Endometrial glands showing marked crowding with back-to-back architecture. Gland-to-stroma ratio >50%. Glands display nuclear stratification, loss of polarity, and nuclear enlargement with irregular chromatin. Minimal intervening stroma. Lesional focus measures >1mm.',
    ihc: 'Not performed (morphology diagnostic).',
    diagnosis: 'Atypical hyperplasia / Endometrial intraepithelial neoplasia (EIN)',
    discussion: 'EIN is characterized by gland crowding (>50% glands), cytologic atypia, and size >1mm. This represents a precancerous lesion with ~40% risk of concurrent or subsequent endometrial carcinoma. Distinguished from benign hyperplasia by cytologic atypia.'
  },
  {
    id: 'case-003',
    title: 'Ovarian Mass with Papillary Architecture',
    category: 'Ovary',
    clinical: '65-year-old woman with pelvic mass, ascites, and elevated CA-125 (850 U/mL).',
    gross: 'Right ovary enlarged to 12 cm with solid and cystic areas. Cut surface shows friable papillary excrescences.',
    micro: 'Tumor composed of complex papillary structures with hierarchical branching. Tumor cells show marked nuclear atypia, pleomorphism, high nuclear-to-cytoplasmic ratio, and prominent nucleoli. Numerous mitotic figures (>25/10 HPF). Slit-like spaces noted.',
    ihc: 'p53: Diffuse strong nuclear positivity (>90% tumor cells) - mutant pattern. WT1: Positive. PAX8: Positive. ER: Positive.',
    molecular: 'TP53 mutation detected.',
    diagnosis: 'High-grade serous carcinoma',
    discussion: 'HGSC is characterized by high-grade nuclear atypia, papillary architecture, and p53 mutation (~96%). The aberrant p53 pattern (diffuse strong = overexpression) confirms mutant status. WT1 positivity supports serous lineage. This tumor type often presents at advanced stage with peritoneal spread.'
  },
  {
    id: 'case-004',
    title: 'Products of Conception with Abnormal Villi',
    category: 'GTD',
    clinical: '28-year-old G2P1 at 10 weeks gestation with vaginal bleeding and "snowstorm" appearance on ultrasound. hCG 250,000 mIU/mL.',
    gross: 'Abundant grape-like vesicular tissue.',
    micro: 'Chorionic villi showing diffuse enlargement with central cistern formation. Circumferential trophoblastic hyperplasia involving both cytotrophoblast and syncytiotrophoblast. No fetal tissue identified.',
    ihc: 'p57: Negative in villous stromal cells and cytotrophoblast (positive in maternal decidua - internal control).',
    molecular: 'Karyotype: 46,XX (androgenetic diploid).',
    diagnosis: 'Complete hydatidiform mole',
    discussion: 'Complete mole shows diffuse villous enlargement, cisterns, circumferential trophoblast, and p57 negativity (no maternal genome). hCG follow-up essential as ~15-20% develop persistent GTD. Distinguished from partial mole by p57 negativity and absence of fetal parts.'
  },
  {
    id: 'case-005',
    title: 'Placenta with Distal Villous Hypoplasia',
    category: 'Placenta',
    clinical: 'Term delivery (39 weeks) with fetal growth restriction (birth weight 2200g, <5th percentile). Mother had preeclampsia.',
    gross: 'Placenta weighing 280g (small for gestational age). No obvious lesions.',
    micro: 'Terminal villi showing reduced branching and increased intervillous space. Accelerated villous maturation with increased syncytial knots beyond expected for gestational age. Distal villous hypoplasia noted. Rare small infarcts (<5% volume).',
    diagnosis: 'Maternal vascular malperfusion (MVM) - distal villous hypoplasia with accelerated maturation',
    discussion: 'MVM represents uteroplacental insufficiency, commonly associated with preeclampsia and FGR. Features include accelerated maturation, distal villous hypoplasia, and sometimes infarction. The pattern reflects decreased maternal blood flow to the placenta.'
  },
  {
    id: 'case-006',
    title: 'Hysterectomy for Endometrial Mass',
    category: 'Endometrium',
    clinical: '72-year-old woman with postmenopausal bleeding. EMB showed "high-grade carcinoma." CA-125 elevated.',
    gross: 'Uterus with 4cm polypoid endometrial mass invading >50% myometrial thickness.',
    micro: 'Tumor composed of complex papillary structures with high-grade nuclear features. Cells show marked pleomorphism, prominent nucleoli, and slit-like glandular spaces. Some areas with hobnailing. No squamous differentiation.',
    ihc: 'p53: Complete absence of nuclear staining (null pattern) - mutant. MMR proteins: Intact (MLH1, PMS2, MSH2, MSH6 all retained). ER/PR: Negative.',
    diagnosis: 'Uterine serous carcinoma',
    discussion: 'Serous carcinoma shows p53 mutation in ~90% (null or overexpression pattern). Characterized by papillary architecture, high-grade nuclei, and aggressive behavior. MMR intact and ER/PR negative help distinguish from endometrioid. Prognosis is poor with frequent extrauterine spread even in "early stage."'
  },
  {
    id: 'case-007',
    title: 'Ovarian Mass in Young Woman',
    category: 'Ovary',
    clinical: '22-year-old woman with pelvic mass and elevated AFP (2500 ng/mL). hCG normal.',
    gross: 'Unilateral ovarian mass, 15cm, with solid and cystic areas. Variegated cut surface.',
    micro: 'Tumor showing multiple patterns including: reticular/microcystic areas, papillary structures, and distinctive glomeruloid structures (Schiller-Duval bodies). Tumor cells have clear to eosinophilic cytoplasm with prominent nucleoli. Hyaline globules present.',
    ihc: 'AFP: Positive. SALL4: Positive. Glypican-3: Positive. OCT4: Negative.',
    diagnosis: 'Yolk sac tumor',
    discussion: 'Yolk sac tumor is characterized by Schiller-Duval bodies, elevated serum AFP, and positive AFP immunostaining. SALL4 is a sensitive germ cell marker. OCT4 negativity helps distinguish from dysgerminoma. Chemosensitive with good prognosis when treated appropriately.'
  },
  {
    id: 'case-008',
    title: 'Ovarian Tumor with "Coffee Bean" Nuclei',
    category: 'Ovary',
    clinical: '45-year-old woman with pelvic mass and abnormal uterine bleeding. Endometrial biopsy showed hyperplasia. Inhibin elevated.',
    gross: 'Unilateral ovarian mass, 8cm, solid, yellow-tan cut surface.',
    micro: 'Tumor composed of uniform cells arranged in diffuse sheets, trabeculae, and focal Call-Exner bodies (rosette-like structures). Nuclei show characteristic longitudinal grooves ("coffee bean" appearance). Moderate mitotic activity.',
    ihc: 'Inhibin: Positive. Calretinin: Positive. SF-1: Positive. EMA: Negative.',
    molecular: 'FOXL2 C134W mutation detected.',
    diagnosis: 'Adult granulosa cell tumor',
    discussion: 'Adult GCT shows coffee-bean nuclei, Call-Exner bodies, and FOXL2 mutation in ~95%. Inhibin and calretinin positivity confirm sex cord-stromal lineage. Estrogen production causes endometrial hyperplasia. Malignant potential with late recurrences possible.'
  }
];

const Cases = () => {
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCaseSelect = (caseData: CaseData) => {
    setSelectedCase(caseData);
    setShowAnswer(false);
  };

  const handleReset = () => {
    setSelectedCase(null);
    setShowAnswer(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Integrated Case Bank</h1>
          <p className="text-muted-foreground">Synthetic cases combining morphology, IHC, and molecular findings</p>
        </div>
      </div>

      <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md text-sm">
        <strong>Educational Only:</strong> All cases are synthetic and created for educational purposes.
        Not for clinical diagnosis or patient care.
      </div>

      {!selectedCase ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cases.map((caseData) => (
              <Card
                key={caseData.id}
                className="cursor-pointer hover:shadow-lg transition-all"
                onClick={() => handleCaseSelect(caseData)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-xs font-medium text-primary mb-1">{caseData.category}</div>
                      <CardTitle className="text-lg">{caseData.title}</CardTitle>
                      <CardDescription className="mt-2 line-clamp-2">
                        {caseData.clinical}
                      </CardDescription>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-2" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-primary">{selectedCase.category}</div>
            <Button onClick={handleReset} variant="outline" size="sm">
              Back to Cases
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{selectedCase.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Clinical History</h3>
                <p className="text-sm text-muted-foreground">{selectedCase.clinical}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Gross Description</h3>
                <p className="text-sm text-muted-foreground">{selectedCase.gross}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Microscopic Description</h3>
                <p className="text-sm text-muted-foreground">{selectedCase.micro}</p>
              </div>

              {selectedCase.ihc && (
                <div>
                  <h3 className="font-semibold mb-2">Immunohistochemistry</h3>
                  <p className="text-sm text-muted-foreground">{selectedCase.ihc}</p>
                </div>
              )}

              {selectedCase.molecular && (
                <div>
                  <h3 className="font-semibold mb-2">Molecular Findings</h3>
                  <p className="text-sm text-muted-foreground">{selectedCase.molecular}</p>
                </div>
              )}

              <div className="pt-4">
                <Button onClick={() => setShowAnswer(!showAnswer)} className="w-full">
                  {showAnswer ? 'Hide Diagnosis' : 'Show Diagnosis & Discussion'}
                </Button>
              </div>

              {showAnswer && (
                <div className="space-y-4 pt-4 border-t">
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Diagnosis</h3>
                    <p className="text-sm font-medium">{selectedCase.diagnosis}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Discussion</h3>
                    <p className="text-sm text-muted-foreground">{selectedCase.discussion}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Cases;
