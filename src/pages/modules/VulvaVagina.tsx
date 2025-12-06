import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const VulvaVagina = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Vulvar & Vaginal Pathology</h1>
          <p className="text-muted-foreground">Squamous dysplasia, HPV-associated lesions, and specialized tumors</p>
        </div>
      </div>

      {/* VIN */}
      <Card>
        <CardHeader>
          <CardTitle>Vulvar Intraepithelial Neoplasia (VIN)</CardTitle>
          <CardDescription>Two distinct pathways</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">HPV-Associated VIN (uVIN / Usual VIN)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Demographics:</strong> Younger patients</p>
              <p><strong>Pattern:</strong> Basaloid or warty features</p>
              <p><strong>Architecture:</strong> Full-thickness atypia, loss of maturation</p>
              <p><strong>IHC:</strong> p16 block-positive, Ki-67 elevated</p>
              <p className="text-muted-foreground italic">Associated with HPV 16, 18</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Differentiated VIN (dVIN)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Demographics:</strong> Older patients</p>
              <p><strong>Pattern:</strong> Maintained squamous maturation but with basal atypia</p>
              <p><strong>Features:</strong> Elongated rete ridges, keratin pearls, prominent intercellular bridges</p>
              <p><strong>Association:</strong> Lichen sclerosus, lichen simplex chronicus</p>
              <p><strong>IHC:</strong> p16 negative, p53 aberrant pattern (often basal)</p>
              <p className="text-muted-foreground italic">Higher risk of progression to SCC</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vulvar SCC */}
      <Card>
        <CardHeader>
          <CardTitle>Vulvar Squamous Cell Carcinoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">HPV-Associated SCC</h3>
            <p className="text-sm text-muted-foreground">
              Arises from HPV-associated VIN. Basaloid or warty features. p16 positive.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">HPV-Independent SCC</h3>
            <p className="text-sm text-muted-foreground">
              Arises from dVIN. Keratinizing pattern. Associated with lichen sclerosus. p16 negative, p53 aberrant.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Verrucous Carcinoma</h3>
            <p className="text-sm text-muted-foreground">
              Well-differentiated, exophytic, pushing borders. Minimal atypia. Excellent prognosis.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Paget Disease */}
      <Card>
        <CardHeader>
          <CardTitle>Extramammary Paget Disease</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-sm">
            <p><strong>Pattern:</strong> Large pale cells (Paget cells) in epidermis</p>
            <p><strong>Distribution:</strong> Scattered, pagetoid spread throughout epithelium</p>
            <p><strong>Cytology:</strong> Abundant pale/clear cytoplasm, large nuclei, prominent nucleoli</p>
            <p><strong>IHC:</strong> CK7+, GATA3+, GCDFP-15+, HER2+ (often)</p>
            <p className="text-muted-foreground italic">
              Primary (in situ adenocarcinoma) vs secondary (underlying invasive carcinoma) - require clinical correlation
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bartholin Gland */}
      <Card>
        <CardHeader>
          <CardTitle>Bartholin Gland Lesions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Bartholin Gland Cyst</h3>
            <p className="text-sm text-muted-foreground">
              Retention cyst. Lined by mucin-secreting epithelium or squamous metaplasia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Bartholin Gland Carcinoma</h3>
            <p className="text-sm text-muted-foreground">
              Rare. Adenocarcinoma (most common), SCC, adenoid cystic carcinoma patterns.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Vaginal Lesions */}
      <Card>
        <CardHeader>
          <CardTitle>Vaginal Pathology</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Vaginal Intraepithelial Neoplasia (VAIN)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Similar to cervical SIL</p>
              <p><strong>Grading:</strong> VAIN 1 (low-grade), VAIN 2-3 (high-grade)</p>
              <p><strong>IHC:</strong> p16 block-positive in high-grade</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Vaginal Clear Cell Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Association:</strong> DES (diethylstilbestrol) exposure in utero</p>
              <p><strong>Pattern:</strong> Clear cells, hobnail cells, tubulocystic architecture</p>
              <p><strong>Demographics:</strong> Young women (historically)</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Embryonal Rhabdomyosarcoma (Sarcoma Botryoides)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Demographics:</strong> Children ({'&lt;'}5 years typically)</p>
              <p><strong>Gross:</strong> Polypoid, "grape-like" masses</p>
              <p><strong>Micro:</strong> Cambium layer (dense subepithelial layer), rhabdomyoblasts</p>
              <p><strong>IHC:</strong> Desmin+, MyoD1+, Myogenin+</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benign Lesions */}
      <Card>
        <CardHeader>
          <CardTitle>Common Benign/Inflammatory Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Lichen Sclerosus</h3>
            <p className="text-sm text-muted-foreground">
              Epidermal atrophy, hyperkeratosis, band-like hyalinization of superficial dermis, lichenoid inflammation.
              Risk factor for dVIN/SCC.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Lichen Simplex Chronicus</h3>
            <p className="text-sm text-muted-foreground">
              Acanthosis, hyperkeratosis, hypergranulosis. Related to chronic rubbing/scratching.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Condyloma Acuminatum</h3>
            <p className="text-sm text-muted-foreground">
              HPV-associated wart. Papillary architecture, koilocytosis, hyperkeratosis. Low-risk HPV (6, 11).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* IHC */}
      <Card>
        <CardHeader>
          <CardTitle>Key IHC Markers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">VIN Differentiation</h4>
              <p className="text-sm text-muted-foreground">
                <strong>uVIN:</strong> p16 block-positive<br />
                <strong>dVIN:</strong> p16 negative, p53 aberrant
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Paget Disease</h4>
              <p className="text-sm text-muted-foreground">
                CK7+, GATA3+, GCDFP-15+, HER2+ (often)
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Rhabdomyosarcoma</h4>
              <p className="text-sm text-muted-foreground">
                Desmin+, MyoD1+, Myogenin+
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Melanoma</h4>
              <p className="text-sm text-muted-foreground">
                S100+, SOX10+, Melan-A+, HMB-45+
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
            <p className="font-semibold">⚠️ dVIN vs Reactive Atypia</p>
            <p className="text-muted-foreground">
              dVIN: basal atypia with maturation, elongated rete, p53 aberrant. Reactive: inflammation, no p53 mutation.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Paget Disease vs Melanoma In Situ</p>
            <p className="text-muted-foreground">
              Paget: CK7+, GATA3+. Melanoma: S100+, SOX10+, Melan-A+.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Lichen Sclerosus vs VIN</p>
            <p className="text-muted-foreground">
              LS: atrophy, hyalinization. But can coexist with dVIN - look for basal atypia.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VulvaVagina;
