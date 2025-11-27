// Helper untuk mendapatkan translations untuk services
export const getServiceTranslation = (serviceId: string, t: any) => {
  const serviceKeys: Record<string, string> = {
    'general-checkup': 'generalCheckup',
    'vaccination': 'vaccination',
    'surgery': 'surgery',
    'grooming': 'grooming',
  };

  const key = serviceKeys[serviceId];
  if (!key) return { title: '', description: '' };

  return {
    title: t(`${key}.title`),
    description: t(`${key}.description`),
  };
};

// Helper untuk team members
export const getTeamMemberTranslation = (memberId: string, t: any) => {
  const memberKeys: Record<string, string> = {
    'erin': 'erin',
    'sarah': 'sarah',
    'mike': 'mike',
    'jessica': 'jessica',
  };

  const key = memberKeys[memberId];
  if (!key) return { name: '', role: '' };

  return {
    name: t(`members.${key}.name`),
    role: t(`members.${key}.role`),
  };
};
