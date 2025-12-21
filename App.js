import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity, Linking, Platform } from 'react-native';

export default function App() {

  const profile = {
    name: "ENES FURKAN KUŞ",
    title: "<Backend Developer />", // Code style title
    location: "Konya – Bursa – İzmir",
    phone: "0553 732 1885",
    email: "enesfurkankus16@gmail.com",
    linkedin: "https://www.linkedin.com/in/furkankus16",
    github: "https://github.com/xxRyuka",
    summary: "> Temelinde .NET teknolojileri bulunan, ölçeklenebilir ve güvenli servisler tasarlayan bir mühendis.\n> Clean Architecture ve CQRS tutkunu.\n> Spagetti koddan nefret eder.",
  };

  // Yetenekleri Backend Mimarisine göre grupladım
  const skillSets = [
    {
      category: "Core & Architecture",
      items: [".NET 8 & 9 & 10 ", "C#", "Clean Arch.", "Onion Arch.", "CQRS", "Design Patterns","SOLID"]
    },
    {
      category: "Database & Data",
      items: ["PostgreSQL", "MSSQL", "Entity Framework", "TPH / TPT", "Redis"]
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "RabbitMQ", "Linux (Fedora)", "Git", "Serilog"]
    }
  ];

  const experiences = [
    {
      id: 1,
      company: "Pixelance",
      role: "Backend Developer",
      date: "2025 - Günümüz",
      desc: "Onion Architecture üzerine kurulu sistemde CQRS pattern uygulanması. Veritabanı tasarımında kalıtımsal stratejiler (TPH/TPT) kullanılarak esnek yapıların oluşturulması."
    },
    {
      id: 2,
      company: "SUNS TECH",
      role: "Backend Developer",
      date: "Ağustos 2025 - Devam",
      desc: "Restoran Otomasyonu. Clean Architecture, JWT Security, User Isolation ve Result Pattern entegrasyonları. Yüksek performanslı raporlama servisleri."
    }
  ];

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Link hatası", err));
  };

  return (
    <View style={styles.container}>
      {/* Üst barı koyu yap */}
      <StatusBar barStyle="light-content" backgroundColor="#0f0f11" />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* --- HERO SECTION --- */}
        <View style={styles.header}>
          <View style={styles.imageWrapper}>
            {/* Fotoğraf yoksa internetten çeker, varsa require satırını aç */}
            {/* source={require('./assets/profile.jpg')} */}
            <Image
              source={require('./assets/profile.jpg')}
              style={styles.profileImage}
            />
            <View style={styles.onlineIndicator} />
          </View>

          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>

          <View style={styles.contactRow}>
            <TouchableOpacity onPress={() => openLink(profile.github)} style={styles.iconBtn}>
              <Text style={styles.btnText}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(profile.linkedin)} style={[styles.iconBtn, styles.linkedinBtn]}>
              <Text style={styles.btnText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- TERMINAL SUMMARY --- */}
        <View style={styles.terminalContainer}>
          <View style={styles.terminalHeader}>
            <View style={[styles.dot, { backgroundColor: '#ff5f56' }]} />
            <View style={[styles.dot, { backgroundColor: '#ffbd2e' }]} />
            <View style={[styles.dot, { backgroundColor: '#27c93f' }]} />
            <Text style={styles.terminalTitle}>bash — user: ryuka</Text>
          </View>
          <View style={styles.terminalBody}>
            <Text style={styles.terminalText}>{profile.summary}</Text>
            <View style={styles.cursor} />
          </View>
        </View>

        {/* --- SKILLS (Tech Stack) --- */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>TEKNİK YETKİNLİKLER</Text>

          {skillSets.map((set, index) => (
            <View key={index} style={styles.skillGroup}>
              <Text style={styles.skillCategoryTitle}>{set.category}</Text>
              <View style={styles.skillRow}>
                {set.items.map((skill, i) => (
                  <View key={i} style={styles.skillBadge}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* --- EXPERIENCE --- */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>DENEYİMLER</Text>
          {experiences.map((exp) => (
            <View key={exp.id} style={styles.card}>
              <View style={styles.cardLeftBorder} />
              <View style={styles.cardContent}>
                <View style={styles.cardHeaderRow}>
                  <Text style={styles.companyName}>{exp.company}</Text>
                  <Text style={styles.dateText}>{exp.date}</Text>
                </View>
                <Text style={styles.roleText}>{exp.role}</Text>
                <Text style={styles.descText}>{exp.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* --- FOOTER --- */}
        <View style={styles.footer}>
          {/* <Text style={styles.footerText}>Designed with React Native & Clean Code</Text> */}
        </View>

      </ScrollView>
    </View>
  );
}

// --- MODERN DARK THEME STYLES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f11', // Almost Black
  },
  scrollContent: {
    paddingBottom: 50,
  },

  // Header
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#151518',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 15,
    shadowColor: "#00d2d3",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#00d2d3', // Neon Cyan
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#44bd32',
    borderWidth: 3,
    borderColor: '#151518',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  title: {
    fontSize: 16,
    color: '#00d2d3', // Cyan Accent
    marginTop: 5,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace', // Monospace font
    fontWeight: '600',
  },
  contactRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  iconBtn: {
    backgroundColor: '#2d3436',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  linkedinBtn: {
    backgroundColor: '#0077b5',
    borderColor: '#0077b5',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Terminal Style Bio
  terminalContainer: {
    margin: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    overflow: 'hidden',
  },
  terminalHeader: {
    backgroundColor: '#2d2d2d',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  terminalTitle: {
    color: '#888',
    fontSize: 12,
    marginLeft: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  terminalBody: {
    padding: 15,
  },
  terminalText: {
    color: '#27c93f', // Hacker Green
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontSize: 13,
    lineHeight: 20,
  },
  cursor: {
    width: 8,
    height: 15,
    backgroundColor: '#27c93f',
    marginTop: 5,
  },

  // Section Headers
  section: {
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    color: '#7f8c8d',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 5,
  },

  // Skills
  skillGroup: {
    marginBottom: 20,
  },
  skillCategoryTitle: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '600',
  },
  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#2d3436',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#a29bfe', // Purple Accent for skills
  },
  skillText: {
    color: '#dfe6e9',
    fontSize: 12,
    fontWeight: '500',
  },

  // Experience Cards
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  cardLeftBorder: {
    width: 5,
    backgroundColor: '#e67e22', // Orange Accent for Work
  },
  cardContent: {
    padding: 15,
    flex: 1,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  companyName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#636e72',
    fontSize: 12,
  },
  roleText: {
    color: '#e67e22',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  descText: {
    color: '#b2bec3',
    fontSize: 13,
    lineHeight: 18,
  },

  // Footer
  footer: {
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: '#333',
    fontSize: 10,
  }
});
