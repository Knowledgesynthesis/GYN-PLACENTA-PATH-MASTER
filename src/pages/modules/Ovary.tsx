import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const Ovary = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Ovarian Pathology</h1>
          <p className="text-muted-foreground">Epithelial, germ cell, and sex cord-stromal tumors</p>
        </div>
      </div>

      {/* Epithelial Tumors */}
      <Card>
        <CardHeader>
          <CardTitle>Epithelial Tumors</CardTitle>
          <CardDescription>Most common ovarian neoplasms (~60%)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Serous Tumors</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Low-Grade Serous:</strong> Uniform nuclei, papillary architecture, psammoma bodies</p>
              <p><strong>High-Grade Serous:</strong> Marked nuclear atypia, high mitotic rate, p53 mutant</p>
              <p><strong>IHC:</strong> WT1+, PAX8+, ER+</p>
              <p><strong>Molecular:</strong> HGSC → p53 mutation (~96%), BRCA1/2. LGSC → KRAS, BRAF</p>
              <p className="text-muted-foreground italic">Most common malignant ovarian tumor</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Mucinous Tumors</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Mucin-producing cells, gastrointestinal or endocervical type</p>
              <p><strong>Architecture:</strong> Cystic, multilocular</p>
              <p><strong>IHC:</strong> PAX8 variable, CK7+, CK20 (intestinal type)</p>
              <p><strong>Molecular:</strong> KRAS mutations common</p>
              <p className="text-muted-foreground italic">Rule out metastasis from GI/pancreas</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Endometrioid Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Gland-forming, squamous morules</p>
              <p><strong>Association:</strong> Endometriosis, synchronous endometrial carcinoma</p>
              <p><strong>IHC:</strong> PAX8+, ER+, PR+</p>
              <p className="text-muted-foreground italic">Second most common ovarian carcinoma</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Clear Cell Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Cells:</strong> Clear cells, hobnail cells</p>
              <p><strong>Patterns:</strong> Tubulocystic, papillary, solid</p>
              <p><strong>Association:</strong> Endometriosis</p>
              <p><strong>IHC:</strong> HNF1β+, Napsin A+</p>
              <p className="text-muted-foreground italic">Chemoresistant, worse prognosis</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Brenner Tumor</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Transitional-type epithelium in fibrous stroma</p>
              <p><strong>Features:</strong> "Coffee bean" nuclei, Walthard nests</p>
              <p className="text-muted-foreground italic">Usually benign</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Germ Cell Tumors */}
      <Card>
        <CardHeader>
          <CardTitle>Germ Cell Tumors</CardTitle>
          <CardDescription>Occur in younger patients</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Dysgerminoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Sheets of uniform cells, lymphocytic infiltrate</p>
              <p><strong>Cells:</strong> Large, clear cytoplasm, prominent nucleoli</p>
              <p><strong>IHC:</strong> OCT4+, SALL4+, CD117+</p>
              <p className="text-muted-foreground italic">Ovarian counterpart of testicular seminoma</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Yolk Sac Tumor</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Schiller-Duval bodies (glomeruloid structures)</p>
              <p><strong>Other patterns:</strong> Reticular, solid, glandular</p>
              <p><strong>IHC:</strong> AFP+, SALL4+, Glypican-3+</p>
              <p><strong>Serum marker:</strong> Elevated AFP</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Mature Teratoma (Dermoid Cyst)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Components:</strong> Mature tissues from all 3 germ layers</p>
              <p><strong>Common:</strong> Skin, hair, teeth, neural tissue</p>
              <p className="text-muted-foreground italic">Most common ovarian tumor in young women</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Immature Teratoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Features:</strong> Immature neuroectodermal tissue (primitive neuroepithelium)</p>
              <p><strong>Grading:</strong> Based on amount of immature neural tissue</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sex Cord-Stromal */}
      <Card>
        <CardHeader>
          <CardTitle>Sex Cord-Stromal Tumors</CardTitle>
          <CardDescription>Hormone-producing tumors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Granulosa Cell Tumor</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Adult type (95%):</strong></p>
              <p className="ml-4">• "Coffee bean" nuclear grooves</p>
              <p className="ml-4">• Call-Exner bodies (rosette-like structures)</p>
              <p className="ml-4">• Patterns: diffuse, trabecular, insular</p>
              <p><strong>IHC:</strong> Inhibin+, Calretinin+, SF-1+</p>
              <p><strong>Molecular:</strong> FOXL2 mutation (adult type, ~95%)</p>
              <p><strong>Hormone:</strong> Estrogen production → endometrial hyperplasia</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Sertoli-Leydig Cell Tumors</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Sertoli cells:</strong> Tubular structures</p>
              <p><strong>Leydig cells:</strong> Eosinophilic cytoplasm, Reinke crystals</p>
              <p><strong>IHC:</strong> Inhibin+, Calretinin+</p>
              <p><strong>Hormone:</strong> Androgens → virilization</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Fibroma/Thecoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Fibroma:</strong> Spindle cells, collagenous stroma, acellular</p>
              <p><strong>Thecoma:</strong> Lipid-rich cells, may produce estrogen</p>
              <p><strong>Association:</strong> Meigs syndrome (fibroma + ascites + pleural effusion)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* IHC Panel */}
      <Card>
        <CardHeader>
          <CardTitle>Key IHC Markers for Ovarian Tumors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Epithelial Markers</h4>
              <p className="text-sm text-muted-foreground">
                <strong>PAX8:</strong> Müllerian origin<br />
                <strong>WT1:</strong> Serous tumors<br />
                <strong>ER/PR:</strong> Serous, endometrioid<br />
                <strong>p53:</strong> HGSC (mutant pattern)
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Germ Cell Markers</h4>
              <p className="text-sm text-muted-foreground">
                <strong>OCT4:</strong> Dysgerminoma<br />
                <strong>SALL4:</strong> Germ cell tumors<br />
                <strong>AFP:</strong> Yolk sac tumor<br />
                <strong>CD117:</strong> Dysgerminoma
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Sex Cord-Stromal</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Inhibin:</strong> Granulosa, Sertoli-Leydig<br />
                <strong>Calretinin:</strong> Sex cord-stromal<br />
                <strong>SF-1:</strong> Steroid-producing
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Metastasis Work-up</h4>
              <p className="text-sm text-muted-foreground">
                <strong>CK7/CK20:</strong> Origin determination<br />
                <strong>CDX2:</strong> GI primary<br />
                <strong>TTF-1:</strong> Lung primary
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pitfalls */}
      <Card className="border-yellow-500/50">
        <CardHeader>
          <CardTitle className="text-yellow-600 dark:text-yellow-500">Common Pitfalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm">
            <p className="font-semibold">⚠️ Primary Ovarian vs Metastasis</p>
            <p className="text-muted-foreground">
              Krukenberg tumor (signet ring cells) is metastatic GI. Bilateral, nodular. Use IHC panel.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Low-Grade vs High-Grade Serous</p>
            <p className="text-muted-foreground">
              LGSC: uniform nuclei, {'&lt;'}12 mitoses/10 HPF, KRAS/BRAF. HGSC: marked atypia, high mitoses, p53 mutant.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Brenner vs Transitional Cell Carcinoma</p>
            <p className="text-muted-foreground">
              Brenner: benign transitional epithelium in fibrous stroma. TCC: malignant, invasive.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ovary;
