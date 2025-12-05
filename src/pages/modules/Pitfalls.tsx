import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const Pitfalls = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
            Pitfalls & Mimics
          </h1>
          <p className="text-muted-foreground">Common diagnostic challenges and how to avoid them</p>
        </div>
      </div>

      {/* Cervical Pitfalls */}
      <Card className="border-yellow-500/50">
        <CardHeader>
          <CardTitle>Cervical Pathology Pitfalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Immature Squamous Metaplasia vs HSIL
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>The Problem:</strong> Both can show basaloid cells with high N:C ratio</p>
              <p><strong>Immature Metaplasia:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • Bland, uniform nuclei<br />
                • Orderly maturation preserved<br />
                • Low mitotic activity<br />
                • p16 negative or patchy<br />
                • Ki-67 basal only
              </p>
              <p><strong>HSIL:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • Nuclear hyperchromasia, irregularity<br />
                • Loss of maturation<br />
                • Mitotic figures, abnormal mitoses<br />
                • p16 block-positive<br />
                • Ki-67 extends to upper layers
              </p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> Use p16 IHC when uncertain</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Tubal Metaplasia vs AIS
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Tubal Metaplasia:</strong> Benign, ciliated cells, bland nuclei, normal architecture</p>
              <p><strong>AIS:</strong> Nuclear stratification, mitoses, apoptosis, complex glands, p16 block-positive</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> Look for cilia (metaplasia) vs mitoses/apoptosis (AIS)</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Reactive/Reparative Changes vs LSIL
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Reactive:</strong> Uniform nuclear enlargement, smooth nuclear membranes, inflammation</p>
              <p><strong>LSIL:</strong> Koilocytosis, nuclear irregularity, binucleation, hyperchromasia</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> Look for koilocytes and binucleation in LSIL</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Endometrial Pitfalls */}
      <Card className="border-yellow-500/50">
        <CardHeader>
          <CardTitle>Endometrial Pathology Pitfalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Disordered Proliferative Endometrium vs Hyperplasia
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Disordered Proliferative:</strong> Glands varied but gland:stroma ratio normal, no crowding</p>
              <p><strong>Hyperplasia:</strong> Increased gland:stroma ratio ({'>'}50% glands), gland crowding</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> Assess gland:stroma ratio</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Endometrial Polyp vs EIN
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Polyp:</strong> Fibrous stroma, thick-walled vessels, no cytologic atypia</p>
              <p><strong>EIN:</strong> Crowded glands ({'>'}50%), minimal stroma, cytologic atypia, {'>'}1mm focus</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> Stromal character and cytologic atypia</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Serous Carcinoma vs High-Grade Endometrioid
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Serous:</strong> Papillary, slit-like spaces, hobnailing, p53 aberrant (mutant), often ER/PR negative</p>
              <p><strong>High-grade Endometrioid:</strong> Solid/gland-forming, squamous morules, p53 wild-type (variable), ER/PR usually positive</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> p53 IHC pattern is critical</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Secretory Endometrium vs Clear Cell Carcinoma
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Secretory:</strong> Bland, uniform, subnuclear vacuoles, no hobnailing, no atypia</p>
              <p><strong>Clear Cell CA:</strong> Hobnail cells, high-grade nuclei, atypical architecture, destructive invasion</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Atrophic Endometrium Mimicking Hyperplasia
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>The Problem:</strong> Atrophic glands can appear crowded and back-to-back</p>
              <p><strong>Solution:</strong> Look for inactive/atrophic epithelium, cystic glands, no mitoses</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ovarian Pitfalls */}
      <Card className="border-yellow-500/50">
        <CardHeader>
          <CardTitle>Ovarian Pathology Pitfalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Primary Ovarian vs Metastasis (Krukenberg Tumor)
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Krukenberg (GI metastasis):</strong> Bilateral, signet ring cells, ovarian surface involvement</p>
              <p><strong>IHC:</strong> CK7-/CK20+, CDX2+, PAX8-</p>
              <p><strong>Primary Ovarian Mucinous:</strong> Usually unilateral, CK7+, PAX8 variable</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> Always consider metastasis in bilateral mucinous tumors</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Low-Grade vs High-Grade Serous Carcinoma
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>LGSC:</strong> Uniform nuclei, {'&lt;'}12 mitoses/10 HPF, KRAS/BRAF, p53 wild-type</p>
              <p><strong>HGSC:</strong> Marked nuclear atypia, {'>'}12 mitoses/10 HPF, p53 mutant (~96%)</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> p53 IHC and mitotic count</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Sex Cord-Stromal vs Epithelial with Trabecular Pattern
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Sex Cord:</strong> Inhibin+, Calretinin+, EMA-</p>
              <p><strong>Epithelial:</strong> EMA+, PAX8+, Inhibin-</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GTD/Placenta Pitfalls */}
      <Card className="border-yellow-500/50">
        <CardHeader>
          <CardTitle>GTD & Placental Pathology Pitfalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Hydropic Abortion vs Partial Mole
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Hydropic Abortion:</strong> Sporadic villous swelling, no trophoblast hyperplasia, p57+</p>
              <p><strong>Partial Mole:</strong> Two villous populations, scalloping, trophoblast inclusions, p57+ but triploid</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> Look for two populations and trophoblast inclusions in partial mole</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Complete Mole (Early) Recognition
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>The Problem:</strong> Early complete moles may not have classic cisterns</p>
              <p><strong>Solution:</strong> Look for circumferential trophoblast hyperplasia, p57 negative</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Choriocarcinoma vs PSTT
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Choriocarcinoma:</strong> Biphasic (cyto+syncytio), hemorrhagic, hCG high, no villi</p>
              <p><strong>PSTT:</strong> Mononucleate intermediate trophoblast, infiltrative, hPL{'>'}hCG</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Exaggerated Placental Site vs PSTT
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Exaggerated Placental Site:</strong> Normal pregnancy, superficial only, Ki-67 low</p>
              <p><strong>PSTT:</strong> Deep myometrial invasion, mass-forming, higher Ki-67</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ VUE vs Infectious Villitis
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>VUE:</strong> Chronic, patchy, lymphohistiocytic, no organisms</p>
              <p><strong>Infectious:</strong> Look for inclusions (CMV), granulomas, plasma cells, specific patterns</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Overcalling Placental Infarcts
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Remember:</strong> Small peripheral infarcts are common and not clinically significant</p>
              <p><strong>Significant:</strong> {'>'}5% placental volume or central location</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vulva/Vagina Pitfalls */}
      <Card className="border-yellow-500/50">
        <CardHeader>
          <CardTitle>Vulvar & Vaginal Pathology Pitfalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ dVIN vs Reactive Atypia
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>dVIN:</strong> Basal atypia with maintained maturation, elongated rete, p53 aberrant</p>
              <p><strong>Reactive:</strong> Associated with inflammation, no p53 mutation, resolves with treatment</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> p53 IHC pattern</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Paget Disease vs Melanoma In Situ
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Paget:</strong> Large pale cells, CK7+, GATA3+, GCDFP-15+</p>
              <p><strong>Melanoma:</strong> Melanocytes, S100+, SOX10+, Melan-A+, HMB-45+</p>
              <p className="text-blue-600 dark:text-blue-400"><strong>Key:</strong> IHC panel essential</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-yellow-600 dark:text-yellow-500">
              ⚠️ Lichen Sclerosus with dVIN
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>The Problem:</strong> LS and dVIN can coexist</p>
              <p><strong>Solution:</strong> Always look carefully for basal atypia in LS background</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* General Principles */}
      <Card className="border-blue-500/50">
        <CardHeader>
          <CardTitle className="text-blue-600 dark:text-blue-400">General Principles to Avoid Pitfalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>✓ Always correlate with clinical history and imaging</p>
          <p>✓ Use IHC judiciously when morphology is ambiguous</p>
          <p>✓ Consider the differential diagnosis systematically</p>
          <p>✓ When in doubt, seek expert consultation</p>
          <p>✓ Remember: Bilateral ovarian masses → think metastasis</p>
          <p>✓ Assess p53 pattern carefully (mutant vs wild-type)</p>
          <p>✓ Use MMR IHC for all endometrial carcinomas (Lynch screening)</p>
          <p>✓ p16 block-positive = high-risk HPV</p>
          <p className="text-muted-foreground italic mt-4">
            Educational only. Clinical practice requires comprehensive assessment and expert consultation when needed.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pitfalls;
