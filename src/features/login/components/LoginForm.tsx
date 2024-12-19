import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserStore } from '@/store/useUserStore';
import { useOrganizationsStore } from '@/store/useOrganizationsStore';
import { UserDTO, UserStatus } from '@/types/dtos/user-dto';
import { OrganizationDTO, OrganizationStatus } from '@/types/dtos/organization-dto';

// Mock Data
const mockOrganization: OrganizationDTO = {
  id: '1',
  status: OrganizationStatus.ACTIVE,
  name: 'Equatorial Distribuidora de Energia',
  email: 'contact@equatorial.com',
  phones: ['+55 11 98765-4321'],
  document: '12.345.678/0001-99',
  history: [],
  preferences: {
    multiple_items_per_order: true,
    warranty_days: 365,
    estimated_completion_days: 30,
    max_days_under_evaluation: 7,
    max_days_waiting_for_repair: 15,
    closure_terms: 'Termos de encerramento...',
    service_terms: 'Termos de serviço...',
    withdrawal_terms: 'Termos de retirada...',
    warranty_terms: 'Termos de garantia...',
  },
  brand: {
    name: 'Equatorial Energy',
    logoPath: '/path/to/logo.png',
    bannerPath: '/path/to/banner.png',
  },
  created_at: new Date(),
  updated_at: new Date(),
};

// Mock Users
// Mock Users with Abilities
const users: UserDTO[] = [
  {
    id: '1',
    status: UserStatus.ACTIVE,
    name: 'Administrador',
    email: 'administrador@root.com',
    roles: [{ organizationId: '1', name: 'Admin' }],
    abilities: [
      'Dashboard',
      'Settings',
      'ConsumptionMonitoring',
      'PowerGeneration',
      'OpportunitiesTracking',
      'Invoices',
      'Admin',
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '2',
    status: UserStatus.ACTIVE,
    name: 'Cativo',
    email: 'cativo@root.com',
    roles: [{ organizationId: '1', name: 'Cativo' }],
    abilities: ['ConsumptionMonitoring', 'PowerGeneration', 'OpportunitiesTracking', 'Invoices'],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '3',
    status: UserStatus.ACTIVE,
    name: 'Locatário',
    email: 'locatario@root.com',
    roles: [{ organizationId: '1', name: 'Locatário' }],
    abilities: ['ConsumptionMonitoringRenter', 'Invoices'],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '4',
    status: UserStatus.ACTIVE,
    name: 'Usineiro',
    email: 'usineiro@root.com',
    roles: [{ organizationId: '1', name: 'Usineiro' }],
    abilities: ['PowerPlants', 'PowerGeneration', 'OpportunitiesTracking', 'Invoices'],
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setOrganizations = useOrganizationsStore((state) => state.setOrganizations);
  const setOrganization = useOrganizationsStore((state) => state.setOrganization);

  const validate = () => {
    const newErrors = { email: '', password: '' };
    if (!email) newErrors.email = 'O e-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'E-mail inválido.';

    if (!password) newErrors.password = 'A senha é obrigatória.';
    else if (password.length < 4) newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const user = users.find((u) => u.email === email && password === 'root');
      if (user) {
        setUser(user);
        setOrganizations([mockOrganization]);
        setOrganization(mockOrganization.id);
        navigate(`/dashboard/${user.roles[0].name.toLowerCase()}`);
      } else {
        alert('Credenciais inválidas');
      }
    }
  };

  const handleGoogleLogin = () => {
    console.log('Login com Google');
  };

  return (
    <Card className="w-full max-w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-card-foreground mb-6">
          Digite seu e-mail abaixo para entrar em sua conta.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-card-foreground" htmlFor="email">Email</label>
            <Input
              id="email"
              className="bg-card text-card-foreground placeholder:text-gray-600"
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-card-foreground" htmlFor="password">Senha</label>
              <Link to="/esqueceu-senha" className="text-sm text-card-foreground hover:underline">
                Esqueceu sua senha?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                className="bg-card text-card-foreground placeholder:text-gray-600"
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 text-card-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>
          <Button type="submit" className="w-full bg-card-foreground text-card hover:bg-gray-200">
            Entrar
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button
          onClick={handleGoogleLogin}
          variant="outline"
          className="w-full bg-card text-card-foreground"
        >
          <svg
            className="mr-2 h-4 w-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Entrar com o Google
        </Button>
        <div className="text-center text-sm text-card-foreground">
          Você não possui uma conta?{" "}
          <Link to="/cadastro" className="text-card-foreground hover:underline">
            Cadastre-se
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
