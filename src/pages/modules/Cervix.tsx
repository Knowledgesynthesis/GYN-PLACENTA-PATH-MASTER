import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const Cervix = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Cervical Pathology</h1>
          <p className="text-muted-foreground">Squamous & glandular lesions, SIL classification, and IHC patterns</p>
        </div>
      </div>

      {/* Normal Anatomy */}
      <Card>
        <CardHeader>
          <CardTitle>Normal Cervical Anatomy</CardTitle>
          <CardDescription>Understanding the zones and transformation zone</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Squamous Zone (Ectocervix)</h3>
            <p className="text-sm text-muted-foreground">
              Mature stratified squamous epithelium. Shows orderly maturation from basal to superficial layers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Glandular Zone (Endocervix)</h3>
            <p className="text-sm text-muted-foreground">
              Simple columnar mucin-producing epithelium. Forms crypts and glands.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Transformation Zone</h3>
            <p className="text-sm text-muted-foreground">
              Area where squamous metaplasia occurs. Most important site for dysplasia development.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Squamous Lesions */}
      <Card>
        <CardHeader>
          <CardTitle>Squamous Intraepithelial Lesions (SIL)</CardTitle>
          <CardDescription>Pattern-based classification system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">LSIL (Low-Grade Squamous Intraepithelial Lesion) / CIN1</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Architecture:</strong> Lower 1/3 basal atypia</p>
              <p><strong>Cytology:</strong> Koilocytic change (perinuclear halos), nuclear enlargement</p>
              <p><strong>IHC:</strong> Patchy p16 positivity, superficial Ki-67</p>
              <p className="text-muted-foreground italic">
                Pattern: HPV cytopathic effect with limited basal expansion
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">HSIL (High-Grade Squamous Intraepithelial Lesion) / CIN2-3</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Architecture:</strong> Full-thickness or {'>'}2/3 basal expansion</p>
              <p><strong>Cytology:</strong> High N:C ratio, hyperchromasia, mitotic figures</p>
              <p><strong>IHC:</strong> Block-positive p16 (diffuse strong), Ki-67 extends to upper layers</p>
              <p className="text-muted-foreground italic">
                Pattern: Loss of maturation, basal-type cells throughout epithelium
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Squamous Cell Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Architecture:</strong> Invasion through basement membrane</p>
              <p><strong>Patterns:</strong> Keratinizing vs non-keratinizing variants</p>
              <p><strong>Features:</strong> Desmoplastic stroma, irregular nests, single cell invasion</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Glandular Lesions */}
      <Card>
        <CardHeader>
          <CardTitle>Glandular Lesions</CardTitle>
          <CardDescription>Endocervical adenocarcinoma spectrum</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">AIS (Adenocarcinoma In Situ)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Architecture:</strong> Gland crowding, complex branching</p>
              <p><strong>Cytology:</strong> Nuclear pseudostratification, mitotic figures, apoptosis</p>
              <p><strong>IHC:</strong> Block-positive p16, high Ki-67</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Endocervical Adenocarcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Subtypes:</strong> Usual type (HPV-associated), gastric, clear cell, mesonephric</p>
              <p><strong>Features:</strong> Stromal invasion, desmoplasia</p>
              <p><strong>IHC patterns:</strong> Vary by subtype (p16 strong in usual type)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* IHC Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Key IHC Markers</CardTitle>
          <CardDescription>Conceptual staining patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">p16</h4>
              <p className="text-sm text-muted-foreground">
                <strong>LSIL:</strong> Patchy/negative<br />
                <strong>HSIL:</strong> Block-positive (diffuse strong)<br />
                <strong>AIS:</strong> Block-positive
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Ki-67</h4>
              <p className="text-sm text-muted-foreground">
                <strong>LSIL:</strong> Lower 1/3 only<br />
                <strong>HSIL:</strong> Extends to upper layers<br />
                <strong>Normal:</strong> Basal only
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">ER/PR</h4>
              <p className="text-sm text-muted-foreground">
                Helps distinguish endocervical from endometrial origin
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">p63</h4>
              <p className="text-sm text-muted-foreground">
                Squamous marker - positive in squamous lesions, negative in glandular
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
            <p className="font-semibold">⚠️ Immature Squamous Metaplasia vs HSIL</p>
            <p className="text-muted-foreground">
              Metaplasia has bland nuclei, no significant atypia. HSIL shows high N:C ratio, hyperchromasia.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Reactive Changes vs LSIL</p>
            <p className="text-muted-foreground">
              Reactive: uniform nuclei, inflammation. LSIL: koilocytosis, nuclear irregularity.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Tubal Metaplasia vs AIS</p>
            <p className="text-muted-foreground">
              Tubal metaplasia: ciliated cells, bland nuclei. AIS: pseudostratification, mitoses, apoptosis.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Clinical Correlation */}
      <Card>
        <CardHeader>
          <CardTitle>Clinical Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p>
              <strong>Risk factors:</strong> HPV (especially 16, 18), immunosuppression, smoking
            </p>
            <p>
              <strong>Screening:</strong> Cytology (Pap test), HPV testing, colposcopy-guided biopsy
            </p>
            <p>
              <strong>Natural history:</strong> LSIL often regresses; HSIL has higher progression risk
            </p>
            <p className="text-muted-foreground italic">
              Remember: This is educational only. Clinical management requires integration of clinical, colposcopic, and pathologic findings.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cervix;
