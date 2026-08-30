import Image from "next/image";
import type { ProspectBusiness } from "@/prospects";
import { Reveal } from "@/components/ui/Reveal";

function Arrow() {
  return <span aria-hidden="true"><i className="bx bx-right-arrow-alt" aria-hidden="true" /></span>;
}

export function AgroPreview({ business }: { business: ProspectBusiness }) {
  const whatsappUrl = `https://wa.me/${business.whatsapp}`;
  const phoneUrl = `tel:${business.phone?.replace(/[^\d+]/g, "")}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address ?? business.name)}`;

  return (
    <main className="agro-site">
      <a className="agro-skip" href="#conteudo">Pular para o conteúdo</a>

      <header className="agro-nav">
        <a className="agro-brand" href="#conteudo" aria-label={`${business.name}, início`} translate="no">
          <Image src={business.branding.logo} alt="Agrosaul Rações e Ferragens" width={1912} height={822} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#produtos">Produtos</a>
          <a href="#entrega">Entrega</a>
          <a href="#loja">Localização</a>
        </nav>
        <a className="agro-nav-action" href={whatsappUrl} target="_blank" rel="noreferrer"><i className="bx bxl-whatsapp" aria-hidden="true" /> WhatsApp <Arrow /></a>
      </header>

      <section className="agro-hero" id="conteudo">
        <Image src={business.images.hero} alt="Criação rural com cavalo, aves, ração e pastagem" fill priority sizes="100vw" />
        <div className="agro-hero-shade" aria-hidden="true" />
        <div className="agro-hero-copy">
          <p>Rações, ferragens e ferramentas</p>
          <h1>Tudo que move o campo.</h1>
          <p>Produtos para criar, produzir, consertar e continuar o trabalho.</p>
          <a className="agro-button" href={whatsappUrl} target="_blank" rel="noreferrer"><i className="bx bxl-whatsapp" aria-hidden="true" /> Consultar no WhatsApp <Arrow /></a>
        </div>
      </section>

      <section className="agro-service-row" aria-label="Informações de atendimento">
        <div><span>Entrega</span><strong>Programada na região</strong></div>
        <div><span>Atendimento</span><strong>Segunda a sexta, 07h às 18h</strong></div>
        <div><span>Telefone</span><a href={phoneUrl}>{business.phone}</a></div>
      </section>

      <section className="agro-products" id="produtos">
        <Reveal className="agro-products-title">
          <h2>O que você encontra</h2>
          <p>Escolha uma categoria e consulte a disponibilidade pelo WhatsApp.</p>
        </Reveal>
        <div className="agro-product-list">
          {business.productGroups?.map((group) => (
            <article className="agro-product-row" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(", ")}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Consultar ${group.title} no WhatsApp`}><Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="agro-feed-feature">
        <div className="agro-feed-image">
          <Image src="/projects/agrosaul/agrosaul-hero.png" alt="Sacos de ração, milho, carrinho de mão e ferramentas dentro da loja" fill sizes="(max-width: 760px) 100vw, 58vw" />
        </div>
        <Reveal className="agro-feed-copy">
          <span>Nutrição animal</span>
          <h2>No saco ou por quilo.</h2>
          <p>Rações para diferentes espécies e fases de criação, da inicial à engorda.</p>
          <div className="agro-species">
            {['Aves', 'Suínos', 'Equinos', 'Peixes', 'Cães e gatos'].map((species) => <strong key={species}>{species}</strong>)}
          </div>
        </Reveal>
      </section>

      <section className="agro-hardware">
        <Reveal>
          <h2>Para produzir.<br />Para reparar.</h2>
        </Reveal>
        <div className="agro-hardware-groups">
          <div><strong>Ferragens</strong><p>Parafusos, rolamentos e correias para máquinas em geral.</p></div>
          <div><strong>Ferramentas</strong><p>Equipamentos agrícolas manuais e ferramentas de uso geral.</p></div>
          <div><strong>Carretinhas</strong><p>Peças de reposição para manutenção.</p></div>
        </div>
      </section>

      <section className="agro-delivery" id="entrega">
        <div className="agro-delivery-copy">
          <span>Entrega programada</span>
          <h2>Você pede.<br />A Agrosaul leva.</h2>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">Combinar entrega <Arrow /></a>
        </div>
        <div className="agro-delivery-mark" aria-hidden="true">AS</div>
      </section>

      <section className="agro-visit" id="loja">
        <Reveal className="agro-visit-title">
          <h2>Encontre a Agrosaul.</h2>
          <address>{business.address}<br />Próximo ao posto de combustível Armando.</address>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa <Arrow /></a>
        </Reveal>
        <div className="agro-hours">
          <h3>Horários</h3>
          {business.hours?.map((row) => <p key={row.days}><span>{row.days}</span><strong>{row.time}</strong></p>)}
          <a href={phoneUrl}>Ligar para a loja <Arrow /></a>
        </div>
      </section>

      <footer className="agro-footer">
        <Image src={business.branding.logo} alt="Agrosaul Rações e Ferragens" width={1912} height={822} />
        <p>{business.address}</p>
        <p>Demonstração visual independente. Não é o site oficial da Agrosaul.</p>
      </footer>
    </main>
  );
}
