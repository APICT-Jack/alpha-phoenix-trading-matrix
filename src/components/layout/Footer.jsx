import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo variant="small" />
          {/* Footer content */}
        </div>
      </div>
    </footer>
  );
};