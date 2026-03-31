import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/RootLayout';
import { Chatbox } from './components/Chatbox';

// Home
import { HomePage } from './paths/home';

// Specialties
import { SpecialtyPage } from './paths/specialties';

// What We Do
import { EHRPage } from './paths/what-we-do/ehr';
import { PracticeManagementPage } from './paths/what-we-do/practice-management';
import { RCMPage } from './paths/what-we-do/rcm';
import { AnalyticsPage } from './paths/what-we-do/analytics';
import { PatientExperiencePage } from './paths/what-we-do/patient-experience';
import { PaymentProcessingPage } from './paths/what-we-do/payment-processing';

// Solutions / AI
import { AISolutionsPage } from './paths/solutions/ai';
import { ScribePage } from './paths/solutions/ai/scribe';

// Who We Are
import { AboutPage } from './paths/who-we-are/about';
import { NewsPage } from './paths/who-we-are/news';
import { CareersPage } from './paths/who-we-are/careers';

// Resources
import { ResourcesPage } from './paths/resources';
import { BlogPage } from './paths/resources/blog';
import { SuccessStoriesPage } from './paths/resources/success-stories';
import { WebinarsPage } from './paths/resources/webinars';

// Contact
import { ContactPage } from './paths/contact';

// 404
import { NotFoundPage } from './paths/404';

export default function App() {
  return (
    <BrowserRouter>
      <Chatbox />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />

          {/* Specialties */}
          <Route path="/specialties/:specialty" element={<SpecialtyPage />} />

          {/* What We Do */}
          <Route path="/what-we-do/ehr" element={<EHRPage />} />
          <Route path="/what-we-do/practice-management" element={<PracticeManagementPage />} />
          <Route path="/what-we-do/rcm" element={<RCMPage />} />
          <Route path="/what-we-do/analytics" element={<AnalyticsPage />} />
          <Route path="/what-we-do/patient-experience" element={<PatientExperiencePage />} />
          <Route path="/what-we-do/payment-processing" element={<PaymentProcessingPage />} />

          {/* AI Solutions */}
          <Route path="/solutions/ai" element={<AISolutionsPage />} />
          <Route path="/solutions/ai/scribe" element={<ScribePage />} />

          {/* Who We Are */}
          <Route path="/who-we-are/about" element={<AboutPage />} />
          <Route path="/who-we-are/news" element={<NewsPage />} />
          <Route path="/who-we-are/careers" element={<CareersPage />} />

          {/* Resources */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/blog" element={<BlogPage />} />
          <Route path="/resources/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/resources/webinars" element={<WebinarsPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
