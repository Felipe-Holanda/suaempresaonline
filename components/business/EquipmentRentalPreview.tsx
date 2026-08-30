import Image from "next/image";
import type { ProspectBusiness } from "@/prospects";
import { Reveal } from "@/components/ui/Reveal";

function BoxIcon({ name }: { name: string }) {
  return <i className={`bx ${name}`} aria-hidden="true" />;
}

function Arrow() {
  return <BoxIcon name="bx-right-arrow-alt" />;
}

const equipmentIcons = ["bx-building-house", "bx-cog", "bx-layer"];

export function EquipmentRentalPreview({ business }: { business: ProspectBusiness }) {
  const whatsappUrl = `https://wa.me/${business.whatsapp}`;
  const catalogUrl = business.catalogUrl ?? whatsappUrl;
  const phoneUrl = `tel:${business.phone?.replace(/[^\d+]/g, "")}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address ?? business.name)}`;

  return (
    <main className="equip-site">
      <a className="equip-skip" href="#conteudo">Pular para o conteúdo</a>

      <header className="equip-nav">
        <a className="equip-brand" href="#conteudo" aria-label={`${business.name}, início`} translate="no">
          <Image src={business.branding.logo} alt="Equipar Locação de Equipamentos" width={2172} height={724} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#equipamentos">Equipamentos</a>
          <a href="#locacao">Como alugar</a>
          <a href="#enderecos">Endereços</a>
        </nav>
        <a className="equip-nav-action" href={catalogUrl} target="_blank" rel="noreferrer">
          Ver catálogo <Arrow />
        </a>
      </header>

      <section className="equip-hero" id="conteudo">
        <Image src={business.images.hero} alt="Betoneira, compactador e andaimes em uma obra" fill priority sizes="100vw" />
        <div className="equip-hero-shade" aria-hidden="true" />
        <div className="equip-hero-copy">
          <p className="equip-eyebrow">Locação para construção civil</p>
          <h1>Equipamento certo.<br />Obra em movimento.</h1>
          <p>Andaimes, betoneiras e compactadores para obras em Augustinópolis e Araguatins.</p>
          <div className="equip-hero-actions">
            <a className="equip-primary" href={catalogUrl} target="_blank" rel="noreferrer">
              Abrir catálogo <Arrow />
            </a>
            <a className="equip-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <BoxIcon name="bxl-whatsapp" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="equip-service-bar" aria-label="Informações de atendimento">
        <div><BoxIcon name="bx-map" /><span>Atendimento</span><strong>{business.areasServed?.join(" e ")}</strong></div>
        <div><BoxIcon name="bx-time-five" /><span>Segunda a sexta</span><strong>07h às 18h</strong></div>
        <div><BoxIcon name="bx-phone" /><span>Telefone</span><a href={phoneUrl}>{business.phone}</a></div>
      </section>

      <section className="equip-products" id="equipamentos">
        <Reveal className="equip-products-heading">
          <h2>O que a sua obra precisa.</h2>
          <p>Consulte o catálogo para conferir disponibilidade e condições de locação.</p>
        </Reveal>

        <div className="equip-products-layout">
          <div className="equip-yard-image">
            <Image src={business.images.sculpture} alt="Andaimes, betoneira e compactador organizados no pátio" fill sizes="(max-width: 760px) 100vw, 54vw" />
          </div>
          <div className="equip-product-list">
            {business.productGroups?.map((group, index) => (
              <Reveal className="equip-product" delay={index * 90} key={group.title}>
                <BoxIcon name={equipmentIcons[index] ?? "bx-wrench"} />
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.items[0]}</p>
                </div>
                <a href={catalogUrl} target="_blank" rel="noreferrer" aria-label={`Consultar ${group.title} no catálogo`}>
                  <Arrow />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="equip-process" id="locacao">
        <Reveal className="equip-process-title">
          <h2>Do catálogo para a obra.</h2>
        </Reveal>
        <div className="equip-process-grid">
          {business.capabilities.map((item, index) => (
            <article key={item.title}>
              <BoxIcon name={index === 0 ? "bx-search-alt" : index === 1 ? "bx-check-shield" : "bxl-whatsapp"} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="equip-location" id="enderecos">
        <div className="equip-location-main">
          <Reveal>
            <h2>Equipar em<br />Augustinópolis.</h2>
            <address>{business.address}</address>
            <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa <Arrow /></a>
          </Reveal>
          <div className="equip-location-mark" aria-hidden="true"><BoxIcon name="bx-map-pin" /></div>
        </div>
        <div className="equip-hours">
          <h3>Horários</h3>
          {business.hours?.map((row) => (
            <p key={row.days}><span>{row.days}</span><strong>{row.time}</strong></p>
          ))}
          <div className="equip-branch">
            <BoxIcon name="bx-store" />
            <div><span>Também em {business.locations?.[1]?.city}</span><strong>{business.locations?.[1]?.address}</strong></div>
          </div>
        </div>
      </section>

      <section className="equip-contact">
        <div>
          <BoxIcon name="bx-hard-hat" />
          <h2>Qual equipamento você precisa?</h2>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <BoxIcon name="bxl-whatsapp" /> Consultar agora <Arrow />
        </a>
      </section>

      <footer className="equip-footer">
        <Image src={business.branding.logo} alt="Equipar Locação de Equipamentos" width={2172} height={724} />
        <a href={business.socialLinks?.instagram} target="_blank" rel="noreferrer"><BoxIcon name="bxl-instagram" /> Instagram <Arrow /></a>
        <p>Demonstração visual independente. Não é o site oficial da Equipar.</p>
      </footer>
    </main>
  );
}
