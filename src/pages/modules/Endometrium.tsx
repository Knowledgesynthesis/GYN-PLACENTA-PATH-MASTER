import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const Endometrium = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Endometrial Pathology</h1>
          <p className="text-muted-foreground">Hyperplasia, EIN, carcinomas, and cycling patterns</p>
        </div>
      </div>

      {/* Normal Cycling */}
      <Card>
        <CardHeader>
          <CardTitle>Normal Cycling Endometrium</CardTitle>
          <CardDescription>Pattern recognition through the menstrual cycle</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Proliferative Phase</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Glands:</strong> Tubular, evenly spaced, mitotically active<br />
              <strong>Stroma:</strong> Compact, spindle cells<br />
              <strong>Pattern:</strong> Gland:stroma ratio balanced
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Secretory Phase</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Early:</strong> Subnuclear vacuoles<br />
              <strong>Mid:</strong> Supranuclear secretion, saw-tooth glands<br />
              <strong>Late:</strong> Predecidual stroma, spiral arterioles<br />
              <strong>Pattern:</strong> Progressive secretory changes with stromal changes
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Hyperplasia */}
      <Card>
        <CardHeader>
          <CardTitle>Endometrial Hyperplasia</CardTitle>
          <CardDescription>Architectural and cytologic patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Simple Hyperplasia (Historical)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Architecture:</strong> Cystic, dilated glands</p>
              <p><strong>Gland:stroma:</strong> Slightly increased but stroma preserved</p>
              <p><strong>Cytology:</strong> No atypia, bland nuclei</p>
              <p className="text-muted-foreground italic">Low malignant potential</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Complex Hyperplasia without Atypia</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Architecture:</strong> Gland crowding, complex branching</p>
              <p><strong>Gland:stroma:</strong> Increased, {'&lt;'}50% stroma</p>
              <p><strong>Cytology:</strong> No atypia</p>
              <p className="text-muted-foreground italic">Some progression risk</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Atypical Hyperplasia / EIN (Endometrial Intraepithelial Neoplasia)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Architecture:</strong> Marked gland crowding, gland-to-gland contact</p>
              <p><strong>Gland:stroma:</strong> {'>'}50% glands, minimal stroma</p>
              <p><strong>Cytology:</strong> Nuclear atypia, enlarged nuclei, loss of polarity</p>
              <p><strong>Size criterion:</strong> Focus {'>'}1mm</p>
              <p className="text-muted-foreground italic">High progression risk to carcinoma</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Carcinomas */}
      <Card>
        <CardHeader>
          <CardTitle>Endometrial Carcinomas</CardTitle>
          <CardDescription>Major histologic types and molecular patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Endometrioid Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Architecture:</strong> Gland-forming, back-to-back glands, cribriform</p>
              <p><strong>Features:</strong> Squamous morules (keratin pearl-like), squamous differentiation</p>
              <p><strong>Grading:</strong> Based on solid architecture % (FIGO)</p>
              <p><strong>IHC:</strong> ER/PR often positive, variable p53 (often wild-type pattern)</p>
              <p><strong>Molecular:</strong> May show MMR deficiency (MSI), POLE mutations</p>
              <p className="text-muted-foreground italic">Most common type (~80%)</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Serous Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Architecture:</strong> Papillary structures, complex branching</p>
              <p><strong>Cytology:</strong> High-grade nuclei, marked pleomorphism, prominent nucleoli</p>
              <p><strong>Pattern:</strong> Hobnailing, slit-like spaces</p>
              <p><strong>IHC:</strong> p53 aberrant (mutant pattern - diffuse strong OR complete loss)</p>
              <p><strong>Molecular:</strong> p53 mutation (~90%)</p>
              <p className="text-muted-foreground italic">Aggressive behavior, myometrial invasion common</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Clear Cell Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Cytology:</strong> Clear cells, hobnail cells</p>
              <p><strong>Architecture:</strong> Tubulocystic, papillary, solid patterns</p>
              <p><strong>Features:</strong> Hyaline basement membrane material</p>
              <p className="text-muted-foreground italic">Aggressive behavior</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Carcinosarcoma (Malignant Mixed Müllerian Tumor)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Components:</strong> Carcinomatous (epithelial) + sarcomatous (mesenchymal)</p>
              <p><strong>Sarcoma types:</strong> Homologous (endometrial stroma) or heterologous (cartilage, bone)</p>
              <p className="text-muted-foreground italic">High-grade, aggressive</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Polyps */}
      <Card>
        <CardHeader>
          <CardTitle>Endometrial Polyps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Architecture:</strong> Localized overgrowth with fibrovascular core</p>
            <p><strong>Glands:</strong> Often cystically dilated, thick-walled blood vessels</p>
            <p><strong>Stroma:</strong> Fibrotic central stroma</p>
            <p className="text-muted-foreground italic">
              Distinguish from hyperplasia: polyps have fibrous stroma and vessels
            </p>
          </div>
        </CardContent>
      </Card>

      {/* IHC & Molecular */}
      <Card>
        <CardHeader>
          <CardTitle>IHC & Molecular Patterns</CardTitle>
          <CardDescription>Conceptual frameworks for classification</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">MMR (Mismatch Repair)</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Loss:</strong> MLH1, PMS2, MSH2, MSH6<br />
                <strong>Associated with:</strong> Endometrioid carcinoma, Lynch syndrome<br />
                <strong>Pattern:</strong> Nuclear loss in tumor, retained in stroma
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">p53</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Mutant:</strong> Diffuse strong OR complete loss<br />
                <strong>Wild-type:</strong> Variable/patchy<br />
                <strong>Associated with:</strong> Serous carcinoma
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">ER/PR</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Positive:</strong> Endometrioid (usually)<br />
                <strong>Negative/low:</strong> Serous, clear cell
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">POLE Mutation</h4>
              <p className="text-sm text-muted-foreground">
                Ultramutated tumors<br />
                Excellent prognosis<br />
                Requires molecular testing
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
            <p className="font-semibold">⚠️ Disordered Proliferative vs Hyperplasia</p>
            <p className="text-muted-foreground">
              Disordered: glands varied in size/shape but normal gland:stroma. Hyperplasia: increased gland:stroma.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ EIN vs Polyp</p>
            <p className="text-muted-foreground">
              Polyp: fibrous stroma, thick vessels. EIN: crowded glands with minimal stroma, cytologic atypia.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Secretory vs Clear Cell Carcinoma</p>
            <p className="text-muted-foreground">
              Secretory: uniform, bland. Clear cell: atypia, hobnailing, aggressive architecture.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Serous vs Endometrioid High-Grade</p>
            <p className="text-muted-foreground">
              Serous: papillary, slit-like spaces, p53 mutant. Endometrioid: gland-forming, squamous morules.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Endometrium;
