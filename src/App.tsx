import { Button } from '@components/common/Button';
import { Card } from '@components/common/Card';
import { Input } from '@components/common/Input';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-extrabold tracking-tight">FORM</h1>
          <p className="text-xl font-bold text-slate-dark">
            Dress with less stress
          </p>
        </div>

        {/* Button Examples */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
          <Button variant="outline" size="lg">
            Browse Styles
          </Button>
        </div>

        {/* Card Example */}
        <Card hoverable>
          <h3 className="text-2xl font-medium mb-2">Minimalist Aesthetic</h3>
          <p className="text-slate-dark">
            Clean lines, neutral tones, and timeless pieces that never go out of
            style.
          </p>
        </Card>

        {/* Input Example */}
        <Input
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          fullWidth
        />
      </div>
    </div>
  );
}

export default App;
