import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const IHC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">IHC Frameworks</h1>
          <p className="text-muted-foreground">Immunohistochemistry patterns in GYN pathology</p>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding IHC in GYN Pathology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Immunohistochemistry (IHC) provides critical information for diagnosis, classification, and prognosis
            in gynecologic pathology. This module covers conceptual staining patterns - remember these are
            educational representations, not diagnostic tools for patient care.
          </p>
        </CardContent>
      </Card>

      {/* Cervical Markers */}
      <Card>
        <CardHeader>
          <CardTitle>Cervical Lesions</CardTitle>
          <CardDescription>Key markers for SIL and glandular lesions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">p16</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Function:</strong> Cell cycle regulator, surrogate for high-risk HPV</p>
              <p><strong>Pattern interpretation:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • <strong>Block-positive:</strong> Continuous strong nuclear + cytoplasmic staining (HSIL, AIS)<br />
                • <strong>Patchy:</strong> Focal, discontinuous (may be LSIL or reactive)<br />
                • <strong>Negative:</strong> No staining (normal, reactive)
              </p>
              <p><strong>Use:</strong> Distinguish HSIL from mimics (immature metaplasia, reactive changes)</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Ki-67 (MIB-1)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Function:</strong> Proliferation marker</p>
              <p><strong>Pattern interpretation:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • <strong>Normal:</strong> Basal/parabasal only<br />
                • <strong>LSIL:</strong> Lower 1/3<br />
                • <strong>HSIL:</strong> Extends to mid/upper epithelium
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">p63</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Function:</strong> Squamous marker</p>
              <p><strong>Use:</strong> Distinguish squamous from glandular lesions</p>
              <p className="text-muted-foreground">Positive: squamous lesions, negative: glandular lesions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Endometrial Markers */}
      <Card>
        <CardHeader>
          <CardTitle>Endometrial Carcinoma</CardTitle>
          <CardDescription>Classification and prognostic markers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">p53</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Function:</strong> Tumor suppressor</p>
              <p><strong>Pattern interpretation:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • <strong>Wild-type:</strong> Variable, patchy nuclear staining (normal, endometrioid)<br />
                • <strong>Mutant - Overexpression:</strong> Diffuse strong nuclear ({'>'}75% tumor cells) - serous carcinoma<br />
                • <strong>Mutant - Null:</strong> Complete loss/absent staining - serous carcinoma
              </p>
              <p><strong>Use:</strong> Identify serous carcinoma, classify high-grade endometrial carcinomas</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">MMR Proteins (MLH1, PMS2, MSH2, MSH6)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Function:</strong> DNA mismatch repair</p>
              <p><strong>Pattern interpretation:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • <strong>Intact:</strong> Nuclear staining in tumor and background (normal MMR)<br />
                • <strong>Loss:</strong> Absence of nuclear staining in tumor, retained in background (MMR deficiency/MSI)
              </p>
              <p><strong>Patterns:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • MLH1/PMS2 loss: Often sporadic (MLH1 promoter hypermethylation)<br />
                • MSH2/MSH6 loss: Lynch syndrome<br />
                • MSH6 loss alone: Lynch syndrome variant
              </p>
              <p><strong>Clinical:</strong> MMR loss → consider Lynch syndrome testing</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">ER (Estrogen Receptor) / PR (Progesterone Receptor)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • <strong>Endometrioid:</strong> Usually strongly positive<br />
                • <strong>Serous/Clear cell:</strong> Often negative or weakly positive
              </p>
              <p><strong>Use:</strong> Helps distinguish endometrial from ovarian primary, tumor subtyping</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ovarian Markers */}
      <Card>
        <CardHeader>
          <CardTitle>Ovarian Tumors</CardTitle>
          <CardDescription>Origin determination and subtyping</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">PAX8</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Function:</strong> Transcription factor</p>
              <p><strong>Positive:</strong> Müllerian origin (ovarian, endometrial, tubal, renal)</p>
              <p><strong>Use:</strong> Confirm gynecologic/renal primary vs metastasis</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">WT1</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Positive:</strong> Serous tumors (ovarian, tubal), mesothelioma</p>
              <p><strong>Negative:</strong> Endometrioid, mucinous, clear cell</p>
              <p><strong>Use:</strong> Distinguish serous from other epithelial ovarian tumors</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Napsin A / HNF1β</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Positive:</strong> Clear cell carcinoma</p>
              <p><strong>Use:</strong> Identify clear cell carcinoma</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Inhibin / Calretinin / SF-1</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Positive:</strong> Sex cord-stromal tumors</p>
              <p><strong>Use:</strong> Distinguish granulosa cell tumor, Sertoli-Leydig from epithelial tumors</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Germ Cell Markers</h3>
            <div className="space-y-2 text-sm">
              <p><strong>OCT4:</strong> Dysgerminoma (sensitive, specific)</p>
              <p><strong>SALL4:</strong> Broad germ cell marker (dysgerminoma, yolk sac)</p>
              <p><strong>AFP (alpha-fetoprotein):</strong> Yolk sac tumor</p>
              <p><strong>CD117 (c-kit):</strong> Dysgerminoma</p>
              <p><strong>Glypican-3:</strong> Yolk sac tumor</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GTD Markers */}
      <Card>
        <CardHeader>
          <CardTitle>Gestational Trophoblastic Disease</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">p57</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Function:</strong> Maternally expressed imprinted gene (CDKN1C)</p>
              <p><strong>Staining location:</strong> Villous stromal cells and cytotrophoblast</p>
              <p><strong>Interpretation:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • <strong>Negative:</strong> Complete mole (no maternal genome)<br />
                • <strong>Positive:</strong> Partial mole, hydropic abortion (maternal genome present)
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">hCG (beta-hCG)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Positive:</strong> Syncytiotrophoblast</p>
              <p><strong>Strong:</strong> Choriocarcinoma</p>
              <p><strong>Weak/focal:</strong> PSTT, ETT</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">hPL (Human Placental Lactogen)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Strong:</strong> PSTT (intermediate trophoblast)</p>
              <p><strong>Weak:</strong> Choriocarcinoma, ETT</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metastasis Work-up */}
      <Card>
        <CardHeader>
          <CardTitle>Metastasis vs Primary Ovarian</CardTitle>
          <CardDescription>Panel approach</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">CK7 / CK20 Pattern</h3>
              <p className="text-muted-foreground">
                <strong>CK7+/CK20-:</strong> Ovarian, endometrial, lung, breast<br />
                <strong>CK7-/CK20+:</strong> Colorectal<br />
                <strong>CK7+/CK20+:</strong> Pancreas, gastric, urothelial<br />
                <strong>CK7-/CK20-:</strong> Renal cell carcinoma, hepatocellular
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Additional Markers</h3>
              <p className="text-muted-foreground">
                <strong>PAX8:</strong> Müllerian, renal (negative in GI)<br />
                <strong>CDX2:</strong> GI primary<br />
                <strong>TTF-1:</strong> Lung, thyroid<br />
                <strong>GATA3:</strong> Breast, urothelial<br />
                <strong>ER/PR:</strong> Gynecologic, breast
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-blue-500/50">
        <CardHeader>
          <CardTitle className="text-blue-600 dark:text-blue-400">IHC Interpretation Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>✓ Always interpret IHC in context with morphology and clinical history</p>
          <p>✓ Use appropriate controls (internal positive controls when available)</p>
          <p>✓ Understand staining patterns (nuclear vs cytoplasmic, diffuse vs patchy)</p>
          <p>✓ Consider using panels rather than single markers for classification</p>
          <p>✓ Recognize that IHC is ancillary - morphology is still primary</p>
          <p className="text-muted-foreground italic">
            Remember: These are conceptual patterns for educational purposes only
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IHC;
