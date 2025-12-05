import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const GTD = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Gestational Trophoblastic Disease</h1>
          <p className="text-muted-foreground">Molar pregnancies, choriocarcinoma, and trophoblastic tumors</p>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Overview of GTD</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Gestational trophoblastic disease encompasses a spectrum from benign molar pregnancies to malignant
            trophoblastic tumors. All produce hCG, which is monitored clinically.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Spectrum:</strong></p>
            <ul className="list-disc list-inside ml-4 text-muted-foreground">
              <li>Complete hydatidiform mole</li>
              <li>Partial hydatidiform mole</li>
              <li>Invasive mole</li>
              <li>Choriocarcinoma</li>
              <li>Placental site trophoblastic tumor (PSTT)</li>
              <li>Epithelioid trophoblastic tumor (ETT)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Hydatidiform Moles */}
      <Card>
        <CardHeader>
          <CardTitle>Hydatidiform Moles</CardTitle>
          <CardDescription>Complete vs Partial</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Complete Hydatidiform Mole</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Genetics:</strong> Androgenetic diploid (46,XX most common - both from father)</p>
              <p><strong>Villous pattern:</strong> Diffuse villous enlargement, circumferential trophoblast hyperplasia</p>
              <p><strong>Features:</strong> Cistern formation (central cavitation), no fetal parts</p>
              <p><strong>Trophoblast:</strong> Both cytotrophoblast and syncytiotrophoblast proliferation</p>
              <p><strong>IHC:</strong> p57 negative (paternally imprinted gene, maternal expression absent)</p>
              <p><strong>hCG:</strong> Very elevated</p>
              <p><strong>Risk:</strong> ~15-20% develop persistent GTD requiring chemotherapy</p>
              <p className="text-muted-foreground italic">
                Pattern: All villi enlarged, hydropic, with circumferential trophoblast
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Partial Hydatidiform Mole</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Genetics:</strong> Triploid (69,XXY or 69,XXX - dispermy most common)</p>
              <p><strong>Villous pattern:</strong> Two populations - normal and enlarged villi</p>
              <p><strong>Features:</strong> Scalloped villous contours, trophoblast inclusions, fetal parts may be present</p>
              <p><strong>Fetal tissue:</strong> Often abnormal fetus or fetal red blood cells in villi</p>
              <p><strong>IHC:</strong> p57 positive (maternal genome present)</p>
              <p><strong>hCG:</strong> Moderately elevated</p>
              <p><strong>Risk:</strong> Low risk of persistent GTD (~1-5%)</p>
              <p className="text-muted-foreground italic">
                Pattern: Mix of normal and abnormal villi, focal trophoblast proliferation
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Key Distinguishing Features</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Feature</th>
                    <th className="border p-2 text-left">Complete Mole</th>
                    <th className="border p-2 text-left">Partial Mole</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border p-2">Karyotype</td>
                    <td className="border p-2">46,XX (diploid)</td>
                    <td className="border p-2">69,XXY (triploid)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Villous enlargement</td>
                    <td className="border p-2">Diffuse</td>
                    <td className="border p-2">Focal, two populations</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Trophoblast</td>
                    <td className="border p-2">Circumferential</td>
                    <td className="border p-2">Focal</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Fetal tissue</td>
                    <td className="border p-2">Absent</td>
                    <td className="border p-2">May be present</td>
                  </tr>
                  <tr>
                    <td className="border p-2">p57 IHC</td>
                    <td className="border p-2">Negative</td>
                    <td className="border p-2">Positive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Malignant GTD */}
      <Card>
        <CardHeader>
          <CardTitle>Malignant Gestational Trophoblastic Neoplasia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Invasive Mole</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Definition:</strong> Molar villi invading myometrium</p>
              <p><strong>Pattern:</strong> Hydropic villi with trophoblast within myometrium</p>
              <p><strong>Clinical:</strong> Persistent elevated hCG after molar evacuation</p>
              <p className="text-muted-foreground italic">Rarely seen in specimens - usually diagnosed clinically</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Choriocarcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Biphasic proliferation of cytotrophoblast and syncytiotrophoblast</p>
              <p><strong>Architecture:</strong> Sheets of trophoblast, NO VILLI (key feature)</p>
              <p><strong>Features:</strong> Hemorrhage, necrosis, vascular invasion</p>
              <p><strong>IHC:</strong> hCG strongly positive (syncytiotrophoblast), inhibin+</p>
              <p><strong>Clinical:</strong> Highly aggressive, early hematogenous spread (lung, brain)</p>
              <p><strong>Preceding pregnancy:</strong> 50% mole, 25% term pregnancy, 25% abortion/ectopic</p>
              <p className="text-muted-foreground italic">
                Highly chemosensitive despite aggressive behavior
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Placental Site Trophoblastic Tumor (PSTT)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Cell type:</strong> Intermediate trophoblast proliferation</p>
              <p><strong>Pattern:</strong> Infiltrative growth between myometrial fibers</p>
              <p><strong>Features:</strong> Mononucleate cells, minimal syncytiotrophoblast</p>
              <p><strong>IHC:</strong> hPL (human placental lactogen) strongly positive, hCG focal/weak</p>
              <p><strong>IHC:</strong> Inhibin+, CK18+, p63+</p>
              <p><strong>Behavior:</strong> Usually benign, but subset malignant</p>
              <p><strong>hCG:</strong> Low levels (unlike choriocarcinoma)</p>
              <p className="text-muted-foreground italic">Less chemosensitive than choriocarcinoma</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Epithelioid Trophoblastic Tumor (ETT)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Epithelioid cells in nests and cords</p>
              <p><strong>Location:</strong> Often endocervix/lower uterus</p>
              <p><strong>Features:</strong> Geographic necrosis, hyaline matrix</p>
              <p><strong>IHC:</strong> p63+, inhibin+, hPL focal, hCG minimal</p>
              <p className="text-muted-foreground italic">Rarest form of GTD</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* IHC Panel */}
      <Card>
        <CardHeader>
          <CardTitle>Key IHC Markers in GTD</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">p57</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Complete mole:</strong> Negative<br />
                <strong>Partial mole:</strong> Positive<br />
                <strong>Hydropic abortion:</strong> Positive<br />
                Nuclear stain in villous stromal cells and cytotrophoblast
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">hCG (beta-hCG)</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Choriocarcinoma:</strong> Strong (syncytiotrophoblast)<br />
                <strong>PSTT:</strong> Weak/focal<br />
                <strong>ETT:</strong> Minimal
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">hPL (Placental Lactogen)</h4>
              <p className="text-sm text-muted-foreground">
                <strong>PSTT:</strong> Strong, diffuse<br />
                <strong>ETT:</strong> Focal<br />
                <strong>Choriocarcinoma:</strong> Negative/weak
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Inhibin</h4>
              <p className="text-sm text-muted-foreground">
                Positive in trophoblast<br />
                Helps confirm trophoblastic differentiation
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
            <p className="font-semibold">⚠️ Hydropic Abortion vs Partial Mole</p>
            <p className="text-muted-foreground">
              Hydropic abortion: sporadic villous swelling, no trophoblast hyperplasia, p57 positive. Partial mole:
              two populations, scalloping, trophoblast inclusions, p57 positive but triploid.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Early Complete Mole</p>
            <p className="text-muted-foreground">
              May not show classic cisterns if early. Look for circumferential trophoblast, p57 negative.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Choriocarcinoma vs PSTT</p>
            <p className="text-muted-foreground">
              Choriocarcinoma: biphasic (cyto + syncytio), hCG high, hemorrhagic. PSTT: mononucleate intermediate
              trophoblast, hPL{'>'}hCG, infiltrative.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Exaggerated Placental Site vs PSTT</p>
            <p className="text-muted-foreground">
              Exaggerated placental site: normal pregnancy finding, superficial myometrial invasion only, Ki-67 low.
              PSTT: deep invasion, higher Ki-67, mass-forming.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Clinical */}
      <Card>
        <CardHeader>
          <CardTitle>Clinical Considerations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>hCG monitoring:</strong> Essential for all GTD. Persistent elevation suggests persistent disease.
          </p>
          <p>
            <strong>Risk stratification:</strong> Complete mole has higher risk of persistent GTD than partial mole.
          </p>
          <p>
            <strong>Treatment:</strong> D&C for moles. Chemotherapy for persistent/malignant GTD (highly effective).
          </p>
          <p className="text-muted-foreground italic">
            Educational only. GTD management requires specialized protocols and careful clinical-pathologic correlation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GTD;
